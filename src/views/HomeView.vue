<template>
	<div class="home">
		<b-button block v-b-toggle.accordion-1 variant="primary">
			Info
		</b-button>

		<b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
			<b-card-body>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</b-card-body>
		</b-collapse>

		<h3></h3>
	</div>
</template>

<script>
export default {
	name: 'HomeView',
};
</script>
