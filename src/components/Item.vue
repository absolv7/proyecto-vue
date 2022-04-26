<template>
	<div class="item">
		<h3>{{ nombre }}</h3>

		<b-img thumbnail fluid :src="imagen" alt="Image"></b-img>

		<h3>${{ precio }}</h3>
	</div>
</template>

<script>
export default {
	name: 'ItemVue',
	props: {
		nombre: String,
		precio: Number,
		imagen: String,
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
}
</style>
