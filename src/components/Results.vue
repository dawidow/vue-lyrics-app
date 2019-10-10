<template>
	<div class="results">
		<div class="result" v-for="lyric in results" :key="lyric.result.id">
				<img :src="lyric.result.header_image_url" class="result__image">
				<h3>{{ lyric.result.primary_artist.name }}</h3>
				<p>{{ lyric.result.title_with_featured }}</p>

				<a :href="lyric.result.url" class="result__link"><font-awesome-icon icon="external-link-alt" /> Czytaj tekst na stronie genius.com</a>
		</div>
	</div>
</template>

<script>
import lyricsView from './Lyrics';

export default {
	name: 'results',
	props: ['results'],
	component: {
		lyricsView
	}
}
</script>

<style lang="scss" scoped>
.results {
	width: 90%;
	margin: 30px auto 0;
	display: flex;
	flex-wrap: wrap;
	// justify-content: space-between;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.result {
		width: 100%;
		min-height: 350px;
		flex-direction: column;
		justify-content: space-between;

		&__image {
			border-radius: 50%;
			height: 120px;
			width: 120px;
		}

		&__link {
			font-size: 12px;
		}
	}
}
</style>