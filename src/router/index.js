import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/dynamic1',
    name: 'dynamic1',
    component: () => import('@/views/dynamic/dynamic1.vue')
  },
  {
    path: '/dynamic2',
    name: 'dynamic2',
    component: () => import('@/views/dynamic/dynamic2.vue')
  },
  {
    path: '/dynamic3',
    name: 'dynamic3',
    component: () => import('@/views/dynamic/dynamic3.vue')
  },
  {
    path: '/dynamic4',
    name: 'dynamic4',
    component: () => import('@/views/dynamic/dynamic4.vue')
  },
  {
    path: '/dynamic5',
    name: 'dynamic5',
    component: () => import('@/views/dynamic/dynamic5.vue')
  },
  {
    path: '/technology/:id',
    name: 'TechArticle',
    component: () => import('@/views/frontier/TechnologyPage.vue'),
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('@/views/Notice.vue'),
  },
  {
    path: '/disaster1',
    name: 'disaster1',
    component: () => import('@/views/disaster/disaster1.vue')
  },
  {
    path: '/disaster2',
    name: 'disaster2',
    component: () => import('@/views/disaster/disaster2.vue')
  },
  {
    path: '/disaster3',
    name: 'disaster3',
    component: () => import('@/views/disaster/disaster3.vue')
  },
  {
    path: '/disaster4',
    name: 'disaster4',
    component: () => import('@/views/disaster/disaster4.vue')
  },
  {
    path: '/disaster5',
    name: 'disaster5',
    component: () => import('@/views/disaster/disaster5.vue')
  },
  {
    path: '/description',
    name: 'description',
    component: () => import('@/views/description.vue'),
  },
  {
    path: '/moreInfo/:id',
    name: 'more',
    component: () => import('@/views/moreInformation/moreInfoPage.vue'),
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes
})
