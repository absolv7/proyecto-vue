<template>
	<div class="item">
		<p>{{ nombre }}</p>
		<b-img class="jaja" :src="imagen" alt="Image" thumbnail></b-img>
		<p>${{ precio }}</p>
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
	width: 200px;
	height: 250px;
	margin-top: 10px;
	/* margin-bottom: 20px; */
	border: solid 1px;
	padding: 20px;
	border-radius: 20px;
	
}

.jaja {
	width: 110px;
	height: 110px;
	object-fit: contain
}

</style>
