<template>
	<div class="container">
		<h1>CHECKOUT</h1>
		<Item
			v-if="object"
			:imagen="object.imagen"
			:nombre="object.nombre"
			:precio="object.precio"
			:checkout="true"
		/>
		<h1 v-else>Empty cart</h1>
		<b-button variant="success">Continuar compra</b-button>
	</div>
</template>

<script>
import Item from '../components/Item.vue';

export default {
	name: 'Checkout',
	data() {
		return {
			object: {},
		};
	},
	components: {
		Item,
	},
	// props: {
	// 	nombre: String,
	// 	precio: Number,
	// 	imagen: String,
	// 	productos: Array,
	// }
	mounted() {
		this.object = JSON.parse(localStorage.getItem('productos-vue'))[0]; // Antes de montar la app creo una variable en el local storage
	},
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border: 1px solid green;
	height: 380px;
	width: 340px;
	gap: 10px;
	padding: 10px;
}
</style>
