<template>
  <div id="app">
	  <div class="header">Find the text for the music you are listening to</div>
	  <div class="search">
		<el-input placeholder="Write author or title of the song..." v-model="input" clearable></el-input>
	  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
	  return {
		  title: ''
	  }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
	font-family: 'Mansalva', sans-serif;
	font-size: 30px;
	margin-bottom: 20px;

}

.search {
	width: 90%;
	margin: 0 auto;
}
</style>