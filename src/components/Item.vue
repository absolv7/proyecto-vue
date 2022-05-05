<template>
	<div class="item">
		<p>{{ nombre }}</p>
		<b-img class="imagen-a" :src="imagen" alt="Image" thumbnail></b-img>
		<p>${{ precio }}</p>
		<b-button @click="$emit('agregarCarrito', { nombre, precio, imagen })" v-b-tooltip.hover title="Añadir a Carrito">
			<b-icon icon="cart-plus"></b-icon>
		</b-button>
	</div>
</template>

<script>
export default {
	name: 'ItemVue',
	data() {
		return {
			items: [],
		};
	},
	props: {
		nombre: String,
		precio: Number,
		imagen: String,
		productos: Array,
	},
};
</script>

<style scoped>
.item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 250px;
	margin-top: 10px;
	/* margin-bottom: 20px; */
	border: solid 1px;
	padding: 20px;
	border-radius: 20px;
	
}

.imagen-a {
	width: 110px;
	height: 110px;
	object-fit: contain
}

</style>
