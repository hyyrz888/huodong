import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import MainContent from "@/components/content/mainContent/MainContent";
// import Home from '../views/Home.vue'
import Feature from '../views/Feature.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/main',
    },
    {
        path: '/main',
        name: '/Main',
        component: Main,
        children: [
            {
            path: "/",
            name: 'MainContent',
            component: MainContent
            }
        ]
    },
    {
        path: '/manage',
        name: 'Manage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Manage.vue')
    },
    {
        path: '/feature',
        name: 'Feature',
        component: Feature
    },
]

const router = new VueRouter({
    routes
})

export default router
