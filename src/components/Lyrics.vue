<template>
	<div class="container">
		<h2 class="lyrics__author">{{ lyric.result.primary_artist.name }}</h2>
		<p class="lyrics__title"></p>
		<p class="lyrics__text"></p>
	</div>
</template>

<script>
export default {
  name: 'lyricsView',
  props: ['lyric']
}
</script>


<style lang="scss">

</style>
