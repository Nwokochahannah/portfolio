import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/public/Home.vue'
import About from '@/views/public/About.vue'
import AuthLogin from '@/views/auth/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/admin', component: AuthLogin },
]

const history = createWebHistory()

const router = createRouter({
  history,
  routes,
})

export default router
