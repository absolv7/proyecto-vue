<template>
	<div>
		<h1>Products</h1>
		<div class="products">
			<div v-for="item in items" :key="item.nombre">
				<ItemVue
					:nombre="item.nombre"
					:precio="item.precio"
					:imagen="item.imagen"
				></ItemVue>
			</div>
		</div>
	</div>
</template>

<script>
import ItemVue from '../components/Item.vue';
export default {
	name: 'Products',
	data() {
		return {
			items: [
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
			],
		};
	},
	components: { ItemVue },
};
</script>

<style scoped>
.products {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}
</style>
