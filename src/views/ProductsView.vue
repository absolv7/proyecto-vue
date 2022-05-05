<template>
	<div class="container">
		<h1>Products</h1>
		<Carrito @eliminarCarrito="eliminarCarrito" :productos="productos"/>
		<div class="products">
			<div v-for="{ nombre, precio, imagen } in items" :key="nombre">
				<ItemVue
					:productos="productos"
					:nombre="nombre"
					:precio="precio"
					:imagen="imagen"
					@agregarCarrito="agregarCarrito"
				></ItemVue>
			</div>
		</div>
	</div>
</template>

<script>
import ItemVue from '../components/Item.vue';
import Carrito from '../components/Carrito.vue';
import items from '../components/Mouses'

export default {
	name: 'Products',
	data() {
		return {
			items,
			productos: [],
		};
	},
	components: { ItemVue, Carrito },
	methods: {
		agregarCarrito({ nombre, precio, imagen }) {
			this.productos = [...this.productos, { nombre, precio, imagen }];
		},
		eliminarCarrito({nombre}){
			this.productos = this.productos.filter((producto)=>producto.nombre!==nombre);
		}
	},
};
</script>

<style scoped>
h1 {
	font-style: oblique;
	text-decoration: underline;
}
.products {
	display: flex;
	max-width: 730px;
	max-height: 400px;
	overflow-y: scroll;
	flex-wrap: wrap;
	width: 100%;
	align-items: center;
	gap: 30px;
	margin-top: 20px;
	border: 4px solid brown;
	border-radius: 10px;
	justify-content: center;
	margin-bottom: 50px;
	
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
