<template>
  <div id="app" data-app="true" class="v-application">
    <v-navigation-drawer :width="100" :clipped="true" app>
      <v-list dense nav>
          <v-list-item v-for="item in navItems" :key="item.title" link>
            <v-list-item-content>
              <v-list-item-title><router-link :to="item.to">{{ item.title }}</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="true" app>
      <h1>Motivational Pool</h1>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navItems: [
        { title: 'Home', to: '/' },
        { title: 'Overview', to: '/overview' }
      ]
    }
  }
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
