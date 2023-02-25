
import {Module} from "vuex";
import { rootState } from '../store'
import axios from "axios";

export interface connectionState {
    baseURL: String,
    ssid: String,
    loggedIn: Boolean
    userID: String,
    loginURL: String,
}

export const connection: Module<connectionState, rootState> = {
    namespaced: true,
    state: {
        baseURL: 'http://localhost:8080/',
        ssid: 'ssid',
        loggedIn: false,
        userID: 'userid',
        loginURL: 'loginreq',
    },
    getters: {
    },
    mutations: {
        setLoggedIn: function(state, payload){
            state.loggedIn = payload;
        }
    },
    actions: {
        getData: function({rootState, state}, payload) {
            return axios({
                url: '' + state.baseURL + payload.url,
                method: 'get',
                data: {
                    data: payload.data,
                }
            })
        },

        postData: function({rootState, state}, payload) {
            return axios({
                url: '' + state.baseURL + payload.url,
                method: 'post',
                data: {
                    data: payload.data,
                }
            })
        },

        loginRequest: function({rootState, state} , payload){
            if(!state.loggedIn) {
                return axios({
                    url: '' + state.baseURL + state.loginURL,
                    method: 'post',
                    data: {
                        username: payload.loginID,
                        password: payload.loginPW
                    },
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            }
        },
    },
    modules: {
    }
}
