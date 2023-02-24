import { createStore } from 'vuex'
import connection from './module/connection'

const index = createStore({
  state: {
    loggedIn: false,
    menuOpen: false,
  },
  getters: {
  },
  mutations: {
    toggleMenu: function(state) {
      state.menuOpen = !state.menuOpen
    }
  },
  actions: {
  },
  modules: {
    connection: connection
  }
})

export default index
