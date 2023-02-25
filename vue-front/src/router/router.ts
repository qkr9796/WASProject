

import {createWebHistory, createRouter} from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import AuthorizedPage from '../views/AuthorizedPage.vue'
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
        path: "/register",
        component: LoginPage
    },
    {
        path: '/authorized',
        component: AuthorizedPage
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

/*
router.beforeEach(function(to, from, next) {
    console.log(to.path)
    if(to.path == '/loginCheck'){
        console.log("loginCheck")
        store.dispatch('connection/getData', {url: 'passed'}).then((r) => {
            if(r.data == 'needLogin')
                next('/login')
            else if(r.data == 'LoginRequest') {
                store.commit('connection/setLoggedIn', true)
                console.log("loggedIn")
                next('/')
            }
        })
    } else {
        next();
    }

})*/

export default router;