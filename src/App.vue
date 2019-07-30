<template>
  <div id="app" data-app="true" class="v-application">
    <v-app-bar app class="text-center">
      <h1>Motivational Pool</h1>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
