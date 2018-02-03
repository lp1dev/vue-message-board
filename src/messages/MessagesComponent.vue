<template>
  <div id="messages">
    <message-input v-if="state.logged" @refresh="loadMessages"/>
    <div v-if="!messages.length">Loading...</div>
    <message
    v-for="(message, index) in reversedMessages"
    :key="message.id" :message="message" :id="messages.length - index - 1"/>
  </div>
</template>

<script>
import Message from './MessageComponent'
import MessageInput from './MessageInput'
import HTTP from '../shared/http'

const AnnoyingMixin = {
  created () {
    console.log(this)
    console.log(`${this} created`)
  }
}

export default {
  name: 'Messages',
  components: { Message, MessageInput },
  mixins: [ AnnoyingMixin ],
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
