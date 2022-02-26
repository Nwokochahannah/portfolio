import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/public/Home.vue'
import About from '@/views/public/About.vue'
import AuthLogin from '@/views/auth/Login.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import store from '../store'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/admin', name: 'login', component: AuthLogin },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
]

const history = createWebHistory()

const router = createRouter({
  history,
  routes,
})

router.beforeEach((to, from, next) => {
  const isAdmin = store.state.auth.isAdmin
  if (to.fullPath === '/dashboard') {
    if (!isAdmin) {
      next('/admin')
    }
  }
  if (to.fullPath === '/admin') {
    if (isAdmin) {
      next('/dashboard')
    }
  }
  next()
})

export default router
