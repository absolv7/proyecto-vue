<template>
	<div
		class="carrito"
		v-b-modal.carrito-mod
		v-b-tooltip.hover.righttop
		title="Click para ver mi carrito"
	>
		<b-icon class="carrito-icon" icon="cart"></b-icon>
		<h3>:</h3>
		<h3>{{ productos.length }}</h3>

		<b-modal id="carrito-mod" title="Mi Carrito" scrollable>
			<div class="my-modal" v-if="productos.length > 0">
				<div class="titulo">
					Cantidad de productos: {{ productos.length }}

					<b-button
						@click="vaciarCarrito"
						v-b-tooltip.hover
						title="Vaciar carrito"
						variant="danger"
						>☒</b-button
					>
				</div>

				<ol class="data">
					<li
						v-for="({ nombre, precio, imagen }, index) in productos"
						:key="index"
					>
						<p v-if="contar(nombre) > 1">
							{{ contar(nombre) }} * {{ nombre }} = ${{
								precio * contar(nombre)
							}}
						</p>
						<div class="item" v-else>
							<img
								class="imagen-a"
								:src="imagen"
								alt="Image"
								thumbnail
							/>
							<p>{{ nombre }} = ${{ precio }}</p>
						</div>

						<b-button
							variant="danger"
							@click="eliminarCarrito(index)"
						>
							<b-icon icon="cart-x-fill"></b-icon>
						</b-button>
					</li>
				</ol>
				<p>
					Total ${{
						productos.reduce(
							(total, producto) => total + producto.precio,
							0
						)
					}}
				</p>
			</div>
			<p v-else>Carrito vacío</p>
		</b-modal>
	</div>
</template>

<script>
export default {
	name: 'carrito',
	data() {
		return {
			productos: localStorage.getItem('productos-vue')
				? localStorage.getItem('productos-vue')
				: [],
		};
	},
	props: {
		nombre: String,
		precio: Number,
		imagen: String,
		// productos: {
		// 	type: Array,
		// 	default: [],
		// },
	},
	methods: {
		contar(nombre) {
			const nombresProductos = this.productos.map(
				(producto) => producto.nombre
			);

			const filtrado = nombresProductos.filter(
				(producto) => producto === nombre
			);

			return filtrado.length;
		},
		eliminarCarrito(index) {
			if (this.productos.length === 0) return;

			this.productos = this.productos.filter(
				(producto, productIndex) => index !== productIndex
			);
			localStorage.setItem(
				'productos-vue',
				JSON.stringify(this.productos)
			); //Agrego el array "Productos" al local storage
		},
		vaciarCarrito() {
			this.productos = [];
			localStorage.clear();
		},
	},
	mounted() {
		if (localStorage.getItem('productos-vue')) {
			this.productos = JSON.parse(localStorage.getItem('productos-vue')); // Antes de montar la app creo una variable en el local storage
			console.log(this.productos);
		}
	},
	watch: {
		productos(value) {
			localStorage.getItem('productos-vue');
		},
	},
};
</script>

<style scoped>
.carrito-icon {
	font-size: 22px;
}

.carrito {
	display: flex !important;
	color: white;
	background-color: #42b983;
	justify-content: space-evenly !important;
	align-items: baseline !important;
	gap: 5px;
	border: 1px solid white;
	width: fit-content;
	height: fit-content;
	padding: 6px;
	border-radius: 5px;
}

li {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.precio-producto {
	margin-left: 10px;
	margin-right: 30px;
	text-decoration: underline;
}

.my-modal {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding: 15px;
	/* width: 100%; */
}

.titulo {
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	align-items: baseline;
}

.imagen-a {
	width: 40px;
	height: 40px;
}

.item {
	display: flex;
	gap: 5px;
	margin-bottom: 15px;
}

.data {
	display: flex;
	flex-direction: column;
}
</style>
