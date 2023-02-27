
import {Module} from "vuex";
import { rootState } from '../store'
import axios from "axios";

export interface connectionState {
    baseURL: String,
    ssid: String,
    loggedIn: Boolean
    userid: String,
}

export const connection: Module<connectionState, rootState> = {
    namespaced: true,
    state: {
        baseURL: 'http://localhost:8080/',
        ssid: '',
        loggedIn: false,
        userid: '',
    },
    getters: {
    },
    mutations: {
        setLoggedIn: function(state, payload){
            state.loggedIn = payload
        },

        setUserid: function(state, payload){
            state.userid = payload
        }
    },
    actions: {
        getData: function({rootState, state}, payload) {
            return axios({
                headers: {
                    "Content-Type": "json"
                },
                url: '' + state.baseURL + payload.url,
                method: 'get',
                data: payload.data
            })
        },

        postData: function({rootState, state}, payload) {
            return axios({
                headers: {
                    "Content-Type": "application/json"
                },
                url: '' + state.baseURL + payload.url,
                method: 'post',
                data: payload.data
            })
        },

        loginRequest: function({rootState, state, commit} , payload){
            if(!state.loggedIn) {
                return axios({
                    url: '' + state.baseURL + 'loginreq',
                    method: 'post',
                    data: {
                        username: payload.loginID,
                        password: payload.loginPW
                    },
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                    .then((r) => {
                        if (r.data == 'loginSuccess') {
                            commit('setLoggedIn', true)
                            commit('setUserid', payload.loginID)
                        }
                    })
            }
        },

        logout: function({state, commit}){
            if(state.loggedIn){
                return axios({
                    url: '' + state.baseURL + 'logout',
                    method: 'post',
                })
                    .then((r) => {
                        if(r.data == 'logout'){
                            commit('setLoggedIn', false)
                        }
                    })
            }
        }
    },
    modules: {
    },
}
