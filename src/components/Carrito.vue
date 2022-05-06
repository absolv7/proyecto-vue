<template>
	<div
		class="carrito"
		v-b-modal.carrito-mod
		v-b-tooltip.hover.righttop
		title="Click para ver mi carrito"
	>
		<b-icon class="carrito-icon" icon="cart"></b-icon>
		<h2>:</h2>
		<h2>{{ productos.length }}</h2>

		<b-modal id="carrito-mod" title="Mi Carrito" scrollable>
			<div class="my-modal" v-if="cantidadProductos.length > 0">
				<div class="titulo">
					Cantidad de productos: {{ cantidadProductos.length }}

					<b-button
						@click="$emit('vaciarCarrito')"
						v-b-tooltip.hover
						title="Vaciar carrito"
						variant="danger"
						>☒</b-button
					>
				</div>

				<ol>
					<li
						v-for="({ nombre, precio }, index) in productos"
						:key="index"
					>
						<p v-if="contar(nombre) > 1">
							{{ contar(nombre) }} * {{ nombre }} = ${{
								precio * contar(nombre)
							}}
						</p>
						<p v-else>{{ nombre }} = ${{ precio }}</p>
						<b-button
							variant="danger"
							@click="$emit('eliminarCarrito', { index })"
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
	name: 'Carrito',
	data() {
		return {
			cantidadProductos: this.productos,
		};
	},
	props: {
		nombre: String,
		precio: Number,
		imagen: String,
		productos: Array,
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
	},
};
</script>

<style scoped>
.carrito-icon {
	font-size: 25px;
}

.carrito {
	display: flex !important;
	width: 150px !important;
	background-color: aquamarine;
	justify-content: space-evenly !important;
	align-items: baseline !important;
	gap: 5px;
	border: 2px solid black;
	width: fit-content;
	padding: 8px;
	border-radius: 5px;
}

li {
	display: flex;
	align-items: baseline;
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
</style>
