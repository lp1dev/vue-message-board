// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MessageBoard from './MessageBoard'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

window['store'] = new Vuex.Store({
  state: {
    logged: window.localStorage.getItem('token') !== null,
    user: null
  },
  mutations: {
    login () {
      this.state.logged = true
    },
    logout () {
      this.state.logged = false
    },
    updateUser (state, user) {
      console.log('user', user)
      this.state.user = user
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#message-board',
  router,
  components: { MessageBoard },
  template: '<MessageBoard/>'
})
