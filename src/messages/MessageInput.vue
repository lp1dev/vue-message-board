<template>
  <div id="message-input">
    <textarea v-model="message" placeholder="What's on your mind ?"/><br/>
    <button @click="sendMessage">Twitt</button>
  </div>
</template>
<script>
import HTTP from '@/shared/http'

export default {
  name: 'MessageInput',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage () {
      if (this.message && this.message.length) {
        HTTP.post('messages', {content: this.message})
          .then((response) => {
            console.log(response)
            this.$emit('refresh')
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
}
</script>
<style>
#message-input {
  text-align: center;
}
button {
  margin: 1vh;
}
</style>
