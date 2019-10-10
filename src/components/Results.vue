<template>
	<div class="results">
		<div class="result" v-for="lyric in results" :key="lyric.result.id">
				<img :src="lyric.result.header_image_url" class="result__image">
				<h3>{{ lyric.result.primary_artist.name }}</h3>
				<p>{{ lyric.result.title_with_featured }}</p>
				<button class="result__btn">Read the lyrics<lyricsView :lyric="results" /></button>
				<a :href="lyric.result.url" class="result__link"><font-awesome-icon icon="external-link-alt" />
				Read the lyrics on genius.com</a>
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
			align-items: center;

		&__image {
			border-radius: 50%;
			height: 120px;
			width: 120px;
		}

		&__link {
			font-size: 12px;
		}

		&__btn {
			display: block;
			cursor: pointer;
			margin: 5px auto;
			padding: 5px;
			border-radius: 5px;
			background-color: transparent;
			border-color: #002fff;
			color: #002fff;
			transition: all .3s ease-in-out;
			font-size: 15px;

		}

		&__btn:hover {
			color: #fff;
			background-color: #002fff;
		}
	}
}

@media screen and (min-width: 768px) {
	.results {
		flex-direction: row;

		.result {
			flex-basis: 45%;
		}
	}
}

@media screen and (min-width: 1024px) {
	.results .result {
		flex-basis: 33%;
	}
}
</style>