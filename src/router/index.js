import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
