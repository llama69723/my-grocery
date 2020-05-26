import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/index',
    name:'index',
    conponent: Index
  },
  {
    path:'/login',
    name:'login',
    conponent: Login
  },
  {
    path:'/signUp',
    name:'signUp',
    conponent: SignUp
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
