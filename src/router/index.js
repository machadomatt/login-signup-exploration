import { createRouter, createWebHistory } from 'vue-router'
import Splash from '../views/Splash-screen.vue'
import Signup from '../views/Sign-up.vue'
import Login from '../views/Log-in.vue'

const routes = [
    {
        path: '/',
        name: 'splash',
        component: Splash,
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
