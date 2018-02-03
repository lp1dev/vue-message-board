<style scoped>
.header {
  padding: 1vh;
  height: 4vh;
  border-bottom: 1px solid black;
}
#user-avatar {
  height: 30px;
  border: 1px solid grey;
  border-radius: 50%;
}
#user-area {
  float: right;
}
</style>
<template>
   <div class="header">
      <span id="logo"><router-link to="/">TwittTwitt</router-link></span>
      <span id="user-area" v-if="state.logged && state.user">
        {{ state.user.login }}
        <img v-if="state.user.avatar" id="user-avatar" :src="state.user.avatar"/>
        <button @click="logout">Logout</button>
      </span>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      state: window.store.state
    }
  },
  methods: {
    logout () {
      console.log('logout')
      this.state.user = null
      this.state.logged = false
    }
  }
}
</script>

