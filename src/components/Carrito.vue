<template>
	<div class="carrito">
		<b-icon class="carrito-icon" icon="cart"></b-icon>
		<h2>{{ productos.length }}</h2>
		<ul>
			<li v-for="{ nombre, precio, imagen } in productos" :key="nombre">
				<h3>{{ nombre }}</h3>
				<h3>{{ precio }}</h3>
				<b-img
					:src="imagen"
					alt="Image"
					height="50px"
					width="50px"
				></b-img>
				<b-button @click="$emit('eliminarCarrito', { nombre })">
					<b-icon icon="cart-dash"></b-icon>
				</b-button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Carrito',
	props: {
		nombre: String,
		precio: Number,
		imagen: String,
		productos: Array,
	},
};
</script>

<style>
.carrito-icon {
	font-size: 25px;
}

.carrito {
	display: flex !important;
	justify-content: center !important;
	align-items: baseline !important;
	gap: 5px;
	border: 1px solid black;
	width: fit-content;
	padding: 8px;
	border-radius: 5px;
}
</style>
