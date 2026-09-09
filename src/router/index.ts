import {createWebHistory, createRouter, type RouteRecordRaw} from "vue-router";
import {exerciceRoutes} from "./exercices.ts";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: ()=> import('../views/AppHome.vue')
    },
    {
        path: '/about',
        component: ()=> import('../views/AppAbout.vue')
    },
    {
        path: '/404',
        component: ()=> import('../views/App404.vue')
    },
    {
        path: '/contact',
        component: ()=> import('../views/AppContact.vue')
    },
    {
        path: '/cookies',
        component: ()=>import('../views/AppCookies.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: ()=> import('../views/App404.vue')
    },
    { path: '/ex', name: 'ex', component: () => import('../views/ExercicesView.vue') },
    ...exerciceRoutes,
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router