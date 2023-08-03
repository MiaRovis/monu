import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/About.vue"),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cities',
    name: 'cities',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cities.vue')
  }
  ,{
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  }
  ,{
    path: '/natural',
    name: 'natural',
    component: () => import(/* webpackChunkName: "about" */ '../views/Natural.vue')
  }
  ,{
    path: '/Pula',
    name: 'Pula',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Pula.vue')
  }
  ,{
    path: '/zagreb',
    name: 'zagreb',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Zagreb.vue')
  }
  ,{
    path: '/dubrovnik',
    name: 'dubrovnik',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Dubrovnik.vue')
  }

  ,{
    path: '/trogir',
    name: 'trogir',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Trogir.vue')
  }
  ,{
    path: '/split',
    name: 'split',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Split.vue')
  }
  ,{
    path: '/zadar',
    name: 'zadar',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Zadar.vue')
  }
  ,{
    path: '/vukovar',
    name: 'vukovar',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Vukovar.vue')
  }
  ,{
    path: '/krk',
    name: 'krk',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Krk.vue')
  }
  ,{
    path: '/osijek',
    name: 'osijek',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Osijek.vue')
  }
  ,{
    path: '/rijeka',
    name: 'rijeka',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Rijeka.vue')
  }
  ,{
    path: '/poreč',
    name: 'poreč',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Poreč.vue')
  }
  ,{
    path: '/med',
    name: 'med',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Med.vue')
  }
  ,{
    path: '/šibenik',
    name: 'šibenik',
    component: () => import(/* webpackChunkName: "about" */ '../views/gradovi/Šibenik.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
