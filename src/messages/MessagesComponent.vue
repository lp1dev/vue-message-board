<template>
  <div id="messages">
    <message-input v-if="state.logged" @refresh="loadMessages"/>
    <div v-if="!messages.length">Loading...</div>
    <message v-for="(message, index) in reversedMessages"
    @click.native="openMessage(index)"
    :key="message.id" v-bind:message="message"/>
  </div>
</template>

<script>
import Message from './MessageComponent'
import MessageInput from './MessageInput'
import HTTP from '../shared/http'

export default {
  name: 'Messages',
  components: { Message, MessageInput },
  data () {
    return {
      messages: [],
      state: window.store.state
    }
  },
  methods: {
    loadMessages () {
      HTTP.get('messages')
        .then((response) => {
          console.log('response', response)
          this.messages = response.data
        })
        .catch((error) => console.error(error))
    },
    openMessage (id) {
      console.log('opening message', id)
      this.$router.push('/messages/' + this.messages.length - id - 1)
      this.$router.go(1)
    }
  },
  computed: {
    reversedMessages () {
      let array = this.messages
      return array.reverse()
    }
  },
  created () {
    this.loadMessages()
  }
}
</script>

<style>
#messages {
  padding: 4vh;
}
</style>
