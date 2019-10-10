<template>
  <div id="app">
	  <div class="header">Find the text for the music you are listening to</div>
	  <form @submit.prevent="handleSubmit" class="search">
		<el-input @submit.prevent="handleSubmit" placeholder="Write author or title of the song..." v-model="search" clearable></el-input>
		<div class="search-icon-cont">
			<div class="search-icon"></div>
		</div>
	</form>
	<Results :results="matchLyrics" />
    <router-view/>
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
		  matchLyrics: []
	  }
  },
  methods: {
	  handleSubmit() {
		  if(this.search && !this.search.trim().length == 0) {

			  axios.get(`https://api.genius.com/search?q=${this.search}&access_token=J2TNQOOrgxMW2kpv2i6EFcrHssL2gII5veB2p23SLOdqhLeEn1812yjY0mc2p1ge`)
				  .then(response => this.matchLyrics = response.data.response.hits)
				.catch(err => console.log(err))
		  }
	  }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .header {
	font-family: 'Mansalva', sans-serif;
	font-size: 30px;
	margin-bottom: 20px;

}

	.search {
		width: 90%;
		margin: 0 auto;
	}
}

.results {
	width: 90%;
	margin: 30px auto 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	// align-items: center;
	flex-direction: row;

	.result {
		width: 20%;
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