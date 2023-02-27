

import {createWebHistory, createRouter} from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import AdminPage from '../views/AdminPage.vue'
import UserPage from '../views/UserPage.vue'
import store from '../store/store'


const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/user",
        component: UserPage
    },
    {
        path: '/admin',
        component: AdminPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach( function(to, from, next) {
    store.commit('setCurrentPage', to.path)
    next()
})


export default router;