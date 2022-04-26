<template>
	<div class="products">
		<h1>Products</h1>
		<ItemVue></ItemVue>
	</div>
</template>

<script>
import ItemVue from '../components/Item.vue';
export default {
	name: 'Products',
	components: { ItemVue },
};
</script>
