<template>
  <div class="message">
    <div class="message-author" :style="style"> {{ message.author }} </div>
    <div class="message-text"> {{ message.content }} </div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  props: [ 'message' ],
  data () {
    return {
      style: 'color: blue'
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
