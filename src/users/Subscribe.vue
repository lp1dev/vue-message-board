<template>
<div id="subscribe-form">
  <span id="error" v-text="error_text"></span><br/>
  <input type="text" placeholder="login" v-model="login_input"><br/>
  <input type="password" placeholder="password" v-model="password_input"><br/>
  <input type="text" placeholder="avatar url" v-model="avatar_input"><br/>
  <button @click="subscribe">Subscribe</button>
</div>
</template>
<script>
import HTTP from '@/shared/http'

export default {
  name: 'Subscribe',
  data () {
    return {
      login_input: '',
      password_input: '',
      avatar_input: '',
      error_text: ''
    }
  },
  methods: {
    subscribe () {
      HTTP.post('users', {login: this.login_input, password: this.password_input, avatar: this.avatar_input})
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
          this.error_text = error.response.data.error
        })
    }
  }
}
</script>
<style>
input[type="text"]{
  margin: 1vh;
}

button {
  margin: 1vh;
}

#subscribe-form {
  text-align: center;
}
</style>
