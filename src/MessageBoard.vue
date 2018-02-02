<template>
  <div class="message-board-containter">
    <login :enabled="login_popin" v-on:loginsuccess="onLoginSuccess"/>
    <app-header/>
    <button v-if="!state.logged" id="button-login" @click="loginSwitch">{{ login_text }}</button>
    <router-view/>
    <app-footer>TwittTwitt</app-footer>
  </div>
</template>

<script>
/* global store */
import AppFooter from './Footer'
import AppHeader from './Header'
import HTTP from '@/shared/http'
import Login from '@/users/LoginComponent'

export default {
  name: 'MessageBoard',
  components: { Login, AppFooter, AppHeader },
  data () {
    return {
      is_logged: false,
      login_popin: false,
      login_text: 'login',
      location: window.location,
      state: window.store.state
    }
  },
  methods: {
    loginSwitch () {
      this.login_popin = !this.login_popin
      this.login_text = this.login_text === 'login' ? 'close' : 'login'
    },
    onLoginSuccess () {
      console.log('onLoginSuccess')
      this.loginSwitch()
      this.is_logged = true
      store.commit('login')
      this.getUser()
    },
    getUser () {
      HTTP.get('users')
        .then((response) => {
          console.log(response)
          store.commit('updateUser', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    if (this.state.logged) {
      this.getUser()
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
.message-board-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#button-login {
  right: 1vh;
  position: absolute;
  z-index: 10;
  top: 0;
  margin-top: 1vh;
}
</style>
