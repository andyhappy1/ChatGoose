import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.config.debug = false;
Vue.config.silent = true;
Vue.config.productionTip = false
Vue.config.warnHandler = function (msg, vm, trace) {
    console.log(msg)
    console.log(trace)
}
Vue.config.silent = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
