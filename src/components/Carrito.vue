<template>
    <div class="carrito" v-b-modal.carrito-mod v-b-tooltip.hover.righttop title="Click para ver mi carrito">
        <b-icon class="carrito-icon" icon="cart"></b-icon>
		<h2>=</h2>
        <h2>{{ productos.length }}</h2>
        <b-modal id="carrito-mod" title="Mi Carrito" scrollable
            >Total de productos: {{ productos.length }}
            <ol>
                <li v-for="({ nombre, precio }, index) in productos" :key="index">
                    <p>* {{ nombre }} = ${{precio}}</p>
                    <b-button @click="$emit('eliminarCarrito', { index })">
                        <b-icon icon="cart-x-fill"></b-icon>
                    </b-button>
                </li>
            </ol>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "Carrito",
    props: {
        nombre: String,
        precio: Number,
        imagen: String,
        productos: Array,
    },
};
</script>

<style scoped>
.carrito-icon {
    font-size: 25px;
}

.carrito {
    display: flex !important;
    width: 200px !important;
    background-color: aquamarine;
    justify-content: space-evenly !important;
    align-items: baseline !important;
    gap: 5px;
    border: 2px solid black;
    width: fit-content;
    padding: 8px;
    border-radius: 5px;
}

li {
    display: flex;
    align-items: baseline;
	justify-content: space-between;

}

.precio-producto {
    margin-left: 10px;
    margin-right: 30px;
    text-decoration: underline;
}
</style>
