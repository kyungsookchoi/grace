import Vue from 'vue'
import router from './router' // index.js를 가져온다
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
