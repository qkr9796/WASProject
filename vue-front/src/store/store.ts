import { createStore } from 'vuex'
import  {connection} from './module/connection'

export interface rootState {
  menuOpen: Boolean
  currentPage: String
}


const store = createStore<rootState>({
  state: {
    menuOpen: false,
    currentPage: '/',
  },
  getters: {
  },
  mutations: {
    toggleMenu: function(state) {
      state.menuOpen = !state.menuOpen
    },

    setCurrentPage: function(state, payload){
      state.currentPage = payload
    },

  },
  actions: {
  },
  modules: {
    connection: connection,
  }
})

export default store
