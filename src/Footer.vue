
<template>
 <div class="footer">
   <slot></slot>
    <router-link to="/subscribe" v-if="location.hash !== '#/subscribe' && !state.logged">Don't have an account ? Click here to subscribe.</router-link>
</div>
</template>
<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      state: window.store.state,
      location: window.location
    }
  }
}
</script>
<style scoped>
.footer {
  padding: 2vh;
  height: 10vh;
  background-color: #e2e2e2;
  border-top: solid 1px black;
  text-align: center;
}
</style>
