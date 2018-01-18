import Vue from 'vue'
import App from './App.vue'
import Login from "./components/Login.vue"

new Vue({
  el: '#app',
  render: h => h(Login)
})
