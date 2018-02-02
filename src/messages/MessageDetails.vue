<template>
  <div v-if="message">
    <button @click="$router.go(-1)">back</button>
    <div> {{ message.author }} </div>
    <div> {{ message.content }} </div>
    <div> {{ message.date }} </div>
  </div>
</template>
<script>
import HTTP from '@/shared/http'

export default {
  name: 'MessageDetails',
  data () {
    return {
      message: null
    }
  },
  methods: {
    loadMessage () {
      HTTP.get('messages/' + this.$route.params.id)
        .then((response) => {
          this.message = response.data
        })
        .catch((error) => console.error(error))
    }
  },
  created () {
    this.loadMessage()
  }
}
</script>
<style>
</style>
