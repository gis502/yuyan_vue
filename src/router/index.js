import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/notice',
            name: 'notice',
            component: () => import('@/views/Notice.vue'),
            meta: {
                noLoginRequired: true,
            },
        },
    ],
})
