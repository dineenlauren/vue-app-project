import Vue from 'vue'
import Router from 'vue-router'
import Swapi from '@/components/Swapi'
import HPotter from '@/components/HPotter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HPotter',
      component: HPotter
    },
    {
      path: '/swapi',
      name: 'Swapi',
      component: Swapi
    },       
  ]
})