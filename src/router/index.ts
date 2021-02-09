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
  },
  {
    path: '/play/balljump',
    name: 'balljump',
    component: () => import('@/components/Playroom/Balljump.vue')
  }
]

export default createRouter({
  history: routerHistory,
  routes
})
