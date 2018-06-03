<template>
  <div id="message-input">
    <textarea :class="{'valid': is_valid}" @input="onInput"
      v-model="message" placeholder="What's on your mind ?"/><br/>
    <button @click="sendMessage">Twitt</button>
  </div>
</template>
<script>
import HTTP from '@/shared/http'

export default {
  name: 'MessageInput',
  data () {
    return {
      message: '',
      is_valid: false
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
    },
    onInput () {
      console.log(this.message)
      this.is_valid = (!this.message || !this.message.length)
    }
  }
}
</script>
<style>
#message-input {
  text-align: center;
}
.valid {
  border: 1px solid red;
}
button {
  margin: 1vh;
}
</style>
