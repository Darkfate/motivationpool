import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Overview from '@/components/Overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    }
  ]
})
