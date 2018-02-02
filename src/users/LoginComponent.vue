<template>
<div id="login-popin" v-if="enabled">
  <div id="login-form">
    <div id="login-error" v-text="error_message"></div>
    <input class="login-input" v-model="login_input" type="text" placeholder="username"/><br/>
    <input class="login-input" v-model="password_input" type="password" placeholder="password"/><br/>
    <button @click="login">Login</button><br/>
  </div>
</div>
</template>
<script>
import HTTP from '../shared/http'

export default {
  name: 'Login',
  props: {
    'enabled': {
      required: true
    }
  },
  data () {
    return {
      login_input: '',
      password_input: '',
      error_message: ''
    }
  },
  methods: {
    login () {
      HTTP.post('login', {login: this.login_input, password: this.password_input})
        .then((response) => {
          window.localStorage.setItem('token', response.data.token)
          console.log('token', response.data.token)
          this.$emit('loginsuccess')
        })
        .catch((error) => {
          this.error_message = error.response.data.error
          console.error(error.response.data)
        })
    }
  }
}
</script>
<style>
#login-popin {
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(0,0,0,0.7);
  text-align: center;
}

#login-form {
  margin-top: 20vh;
}

#login-button-close {
  float: right;
  margin: 1vh;
}

.login-input {
  margin: 1vh;
}
</style>
