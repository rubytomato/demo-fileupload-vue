<template>
  <div id="app">
    <router-view>
      <div slot="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/parallax">Parallax</router-link>
        <router-link to="/upload-form">Upload</router-link>
        <router-link to="/download-form">Download</router-link>
      </div>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
