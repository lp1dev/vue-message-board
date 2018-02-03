<template>
  <div class="message" @click="openMessage">
    <div class="message-author" :style="style"> {{ message.author }} </div>
    <div class="message-text" v-html="parsedContent"> {{ message.content }} </div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  props: { message: { required: true }, id: { type: Number, required: true }},
  data () {
    return {
      style: 'color: blue'
    }
  },
  methods: {
    openMessage () {
      console.log('opening' + this.id)
      this.$router.push({path: `/messages/${this.id}`})
      this.$router.forward()
    }
  },
  computed: {
    parsedContent () {
      const regex = /#(\w+)/g
      const color = "red"
      let parsed = this.message.content
      const matches = parsed.match(regex)
      if (matches) {
        matches.forEach(element => {
          parsed = parsed.replace(element, `<span style="color:${color}">${element}</span>`);
        })
      }
      return parsed
    }
  }
}
</script>
<style>
.message {
  border: 1px solid grey;
}

.message-author {
  font-weight: bold;
  padding-left: 1vh;
}

.message-text {
  padding: 1vh;
}
</style>
