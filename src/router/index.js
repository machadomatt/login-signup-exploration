import { createRouter, createWebHistory } from 'vue-router'
import Splash from '../views/Splash-screen.vue'

const routes = [
    {
        path: '/',
        name: 'splash',
        component: Splash,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
