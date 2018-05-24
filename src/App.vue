<template>
  <v-app id="app">
    <router-view>
      <v-toolbar slot="nav">
        <v-toolbar-title>Vue.js App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat :to="{path: '/'}">Home</v-btn>
          <v-btn flat :to="{path: '/cards'}">Cards</v-btn>
          <v-btn flat :to="{path: '/parallax'}">Parallax</v-btn>
          <v-btn flat :to="{path: '/upload-form'}">Upload</v-btn>
          <v-btn flat :to="{path: '/download-form'}">Download</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-footer class="pa-3" slot="footer">
        <v-spacer></v-spacer>
        <div>{{ new Date().getFullYear() }}</div>
      </v-footer>
    </router-view>
  </v-app>
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
