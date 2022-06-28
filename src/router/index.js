import Vue from 'vue'
import VueRouter from 'vue-router'
import Video from '../components/Video.vue'
import Documents from '../components/Documents.vue'
import Sections from '../components/Sections.vue'
import Themes from '../components/Themes.vue'
import Consultant from '../components/Consultant.vue'
import Automatics from '../components/Automatics.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'video',
    component: Video
  },
  {
    path: '/docs',
    name: 'docs',
    component: Documents
  },
  {
    path: '/themes',
    name: 'themes',
    component: Themes
  },
  {
    path: '/automatics',
    name: 'automatics',
    component: Automatics
  },
  {
    path: '/sections',
    name: 'sections',
    component: Sections
  },
  {
    path: '/consultant',
    name: 'consultant',
    component: Consultant
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
