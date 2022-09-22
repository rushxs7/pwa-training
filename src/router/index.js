import { createRouter, createWebHistory } from 'vue-router'

// View imports
import Home from '@/views/Home.vue'
import Info from '@/views/Info.vue'

// Register all routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/info',
    name: 'info',
    component: Info,
  },
]

// ingest all routes to router and create config
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
