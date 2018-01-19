import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import router from './routes.js';
import App from './App.vue';
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router : router
})
