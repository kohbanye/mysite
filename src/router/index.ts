import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routerHistory = createWebHistory()

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/Index.vue')
  },
  {
    path: '/play',
    name: 'play',
    component: () => import('@/pages/Play.vue')
  }
]

export default createRouter({
  history: routerHistory,
  routes
})
