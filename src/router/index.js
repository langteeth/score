import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  }
]

const router = new VueRouter({
  routes,
  base:process.env.BASE_URL,
  mode:'hash'
})

export default router
