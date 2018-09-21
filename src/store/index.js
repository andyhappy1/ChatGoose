import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import menu from './modules/menu'
import server from './modules/server'

import * as getters from './getters'

Vue.use(Vuex)

const getCookie = name => {
  let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
  return a ? a[1] : ''
}

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    started,
    dashboard
  },
  state: {
    isUserAuthenticated: !!(getCookie('user'))
  },
  mutations: {
    SET_IS_USER_AUTHENTICATED (state, isUserAuthenticated) {
      state.isUserAuthenticated = isUserAuthenticated
      console.log('user is authenticated')
    }
  }
})

export default store
