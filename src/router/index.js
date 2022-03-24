import Vue from "vue"
import VueRouter from 'vue-router'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path:'/home',
                name:'home',
                component:()=>import('../views/home/index.vue')
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../views/user/index.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router