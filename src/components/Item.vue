<template>
	<div class="item">
		<b-img
			thumbnail
			fluid
			src="https://picsum.photos/250/250/?image=54"
			alt="Image 1"
		></b-img>

		<h3>Precio: {{ precio }}</h3>
	</div>
</template>

<script>
export default {
	name: 'ItemVue',
	data() {
		return {
			precio: 12345,
		};
	},
};
</script>

<style scoped>
.item {
	display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
}
</style>
