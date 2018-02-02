import Vue from 'vue'
import Router from 'vue-router'
import Subscribe from '@/users/Subscribe'
import Messages from '@/messages/MessagesComponent'
import MessageDetails from '@/messages/MessageDetails'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: Subscribe
    },
    {
      path: '/messages/:id',
      name: 'Messages Details',
      component: MessageDetails
    }
  ]
})

Vue.use(Router)
