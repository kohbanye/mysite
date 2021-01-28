import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/pages/Index.vue'

export const routerHistory = createWebHistory()

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

export default createRouter({
  history: routerHistory,
  routes
})
