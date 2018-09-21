import * as types from '../../mutation-types'
import statistics from './statistics'
import dashboard from './dashboard'
import chat from './chat'
import tables from './tables'
import extra from './extra'
import auth from './auth'

const state = {
  items: [
    dashboard,
    extra,
    chat,
    tables,
    statistics,
    auth
  ]
}

const mutations = {
  [types.TOGGLE_EXPAND_MENU_ITEM] (state, payload) {
    let menuItem = payload.menuItem
    let expand = payload.expand
    if (menuItem.children && menuItem.meta) {
      menuItem.meta.expanded = expand
    }
  }
}

const actions = {
  toggleExpandMenuItem ({commit}, payload) {
    commit(types.TOGGLE_EXPAND_MENU_ITEM, payload)
  }
}

export default {
  state,
  mutations,
  actions
}
