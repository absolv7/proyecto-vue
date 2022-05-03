<template>
	<div class="item">
		<h3>{{ nombre }}</h3>
		<b-img :src="imagen" alt="Image"></b-img>
		<h3>${{ precio }}</h3>
		<b-button @click="$emit('agregarCarrito', { nombre, precio, imagen })">
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
	gap: 10px;
	margin-top: 10px;
	margin-bottom: 20px;
	border: solid 1px;
	padding: 20px;
	border-radius: 35px;
}
</style>
