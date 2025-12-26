import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/dynamic1',
    name: 'Dynamic1',
    component: () => import('@/views/dynamic/dynamic1.vue')
  },
  {
    path: '/dynamic2',
    name: 'Dynamic2',
    component: () => import('@/views/dynamic/dynamic2.vue')
  },
  {
    path: '/dynamic3',
    name: 'Dynamic3',
    component: () => import('@/views/dynamic/dynamic3.vue')
  },
  {
    path: '/dynamic4',
    name: 'Dynamic4',
    component: () => import('@/views/dynamic/dynamic4.vue')
  },
  {
    path: '/dynamic5',
    name: 'Dynamic5',
    component: () => import('@/views/dynamic/dynamic5.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('@/views/Notice.vue'),
  },
  {
    path: '/description',
    name: 'description',
    component: () => import('@/views/description.vue'),
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes
})
