<template>
  <div id="app">
	  <section class="header">
		  <div class="header__title">Find the text for the music you are listening to</div>
			<form @submit.prevent="handleSubmit" class="search">
				<el-input @submit.prevent="handleSubmit" placeholder="Write author or title of the song..." v-model="search" clearable></el-input>
				<div class="search-icon-cont">
					<div class="search-icon"></div>
				</div>
			</form>
	  </section>
	<Results :results="matchLyrics" v-if="matchLyrics.length"/>
	<p class="lyrics__info" v-else><font-awesome-icon icon="music" /> Search for a song to view results here. <font-awesome-icon icon="music" /></p>
  </div>
</template>

<script>
import axios from 'axios';
import Results from './components/Results';

export default {
  name: 'App',
  components: {
	  Results
  },
  data() {
	  return {
		  search: '',
		  matchLyrics: [],
	  }
  },
  methods: {
	  handleSubmit() {
		  if(this.search && !this.search.trim().length == 0) {

			  axios.get(`https://api.genius.com/search?q=${this.search}&access_token=J2TNQOOrgxMW2kpv2i6EFcrHssL2gII5veB2p23SLOdqhLeEn1812yjY0mc2p1ge`)
				.then(({ data }) => this.matchLyrics = data.response.hits)
				.catch(err => console.log(err))
		  }
	  }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

body {
	margin: 0;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .header {
	  height: 150px;
	  background-image: url('./assets/bg.jpg');
	  background-repeat: no-repeat;
	  background-size: cover;
	  background-position: center;
	  padding-bottom: 40px;

	&__title {
		padding-top: 40px;
		font-family: 'Mansalva', sans-serif;
		font-size: 30px;
		margin-bottom: 20px;
		color: #ebb401;
		text-shadow: 2px 2px 2px #000000;
	}

}

	.search {
		width: 80%;
		margin: 0 auto;
	}
}

.lyrics__info {
	margin-top: 50px;
}
</style>