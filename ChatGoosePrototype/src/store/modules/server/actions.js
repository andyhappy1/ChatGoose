import socketIOClient from 'socket.io-client'
import sailsIOClient from 'sails.io.js'
import Config from '../../../config.json'

import {
  GET,
  ADD,
  STOREUSERNAME,
  ADDMESSAGE
} from './mutation-types'

import axios from '../../../services/axios'

var io = sailsIOClient(socketIOClient)

io.sails.url = 'http://' + Config.ServerURL.Host + ':1337'

export function getRooms ({ commit }) {
  console.log('testGet')
  return new Promise((resolve, reject) => {
    axios.get('/api/login/post')
    .then(response => {
      console.log(response.data)
      commit(GET, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}


export function storeRoom ({ commit }, room) {
  console.log('test')
  return new Promise((resolve, reject) => {
    axios.post('/botUser', room)
    .then(response => {
      console.log(response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function storeMessage ({ commit }, data) {
  return new Promise((resolve, reject) => {
    console.log(data)
    axios.post('/api/login/post', data.message)
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function addBot ({ commit }, data) {
  return new Promise((resolve, reject) => {
    console.log(data)
    axios.post('/api/bot/post', data.message)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        console.log('error')
        reject(error)
      })
  })
}

export function registerUser ({ commit }, data) {
  return new Promise((resolve, reject) => {
    console.log(data)
    axios.post('/api/register/post', data.message)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        console.log('error')
        reject(error)
      })
  })
}

export function loginUser (context, data) {
  return new Promise((resolve, reject) => {
    console.log(data)
    axios.post('/api/login/post', data.message)
      .then(response => {
        context.commit('SET_IS_USER_AUTHENTICATED', true)
        console.log(response.data)
        resolve(response.data)
      })
      .catch(error => {
        console.log('error')
        reject(error)
      })
  })
}

export function setUsername ({ commit }, username) {
  commit(STOREUSERNAME, username)
}

export function roomsSockets ({ commit }) {
  return new Promise((resolve, reject) => {
    // Send a GET request to `http://localhost:1337/hello`:
    io.socket.get('/artsAndEntertainment', function serverResponded (body, JWR) {
      console.log('Sails responded with 2: ', body)
      console.log('with headers: ', JWR.headers)
    })
    io.socket.on('foo', message => {
      resolve(message)
    })


    io.socket.on('botUser', message => {
      console.log('test user')
      switch (message.verb) {
        case 'created':
          console.log('test user create')
          commit(ADD, message.data)
          break
        case 'addedTo':
          if (message.attribute === 'messages') {
            io.socket.get('/rooms/' + message.id + '/messages/' + message.addedId, function serverResponded (body, JWR) {
              commit(ADDMESSAGE, {id: message.id, message: body[0]})
            })
          }
          break
      }
      console.log(message)
    })
  })
}
