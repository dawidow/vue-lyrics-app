<template>
	<div class="results">
		<div class="result" v-for="lyric in results" :key="lyric.result.id">
				<img :src="lyric.result.header_image_url" class="result__image">
				<h3>{{ lyric.result.primary_artist.name }}</h3>
				<p>{{ lyric.result.title_with_featured }}</p>
				<a :href="lyric.result.url" class="result__link"><i class="fa fa-external-link" aria-hidden="true"></i> Czytaj tekst na stronie genius.com</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'results',
	props: ['results'],
}
</script>

<style lang="scss" scoped>

</style>