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

const items = [
	{
		nombre: 'HyperX Pulsefire Dart',
		precio: 2500,
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_601015-MLA41817790074_052020-O.webp',
	},
	{
		nombre: 'HyperX Pulsefire',
		precio: 5000,
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_835019-MLA32158087459_092019-O.webp',
	},
	{
		nombre: 'Logitech Lightspeed G703',
		precio: 3000,
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_920865-MLA41632030645_052020-O.webp',
	},
];

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
	align-items: center;
	gap: 30px;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
