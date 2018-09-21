import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getCookie = name => {
    let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
    return a ? a[1] : ''
}

export default new Vuex.Store({
  state: {
      isUserAuthenticated: !!(getCookie('user'))
  },
  mutations: {
      SET_IS_USER_AUTHENTICATED (state, isUserAuthenticated) {
          state.isUserAuthenticated = isUserAuthenticated
          console.log('user is authenticated')
      }
  },
  actions: {

  }
})
