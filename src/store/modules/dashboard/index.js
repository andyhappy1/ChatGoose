import * as types from '../../mutation-types'
import statistics from './statistics'
import chat from './chat'
import tables from './tables'
import extra from './extra'

const getCookie = name => {
  let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
  console.log('cooke user222')
  console.log(a ? a[1] : '')
  return a ? a[1] : ''
}

const stateForPerson = {
  items: [
    extra,
    chat,
    tables,
    statistics
  ]
}

const stateForGroup = {
  items: [
    chat,
    tables,
    statistics
  ]
}

var state = getCookie('bot') === '6' ? stateForGroup : stateForPerson

const mutations = {
  [types.TOGGLE_EXPAND_MENU_ITEM] (state, payload) {
    state = getCookie('bot') === '6' ? stateForGroup : stateForPerson
    let menuItem = payload.menuItem
    let expand = payload.expand
    if (menuItem.children && menuItem.meta) {
      menuItem.meta.expanded = expand
    }
  }
}

const actions = {
  toggleExpandMenuItem ({commit}, payload) {
    state = getCookie('bot') === '6' ? stateForGroup : stateForPerson
    commit(types.TOGGLE_EXPAND_MENU_ITEM, payload)
  }
}

export default {
  state,
  mutations,
  actions
}
