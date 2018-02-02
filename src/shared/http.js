/* global localStorage */
import axios from 'axios'

export default axios.create({
  baseURL: 'https://whispering-spire-74666.herokuapp.com/',
  headers: {
    Authorization: localStorage.getItem('token')
  }
})

// export default {
//   send (url, method) {
//     return new Promise((resolve, reject) => {
//       if (window['XMLHttpRequest'] !== undefined) {
//         var XMLHttpRequest = window['XMLHttpRequest']
//         var request = new XMLHttpRequest()
//         request.onload = () => {
//           resolve(request.response)
//         }
//         request.onerror = () => {
//           reject(request.Error)
//         }
//         request.open(method, url, true)
//         request.send()
//       } else {
//         reject(new Error('XMLHttpRequest is not supported by your browser'))
//       }
//     })
//   },
//   get (url) {
//     return this.send(url, 'GET')
//   }
// }
