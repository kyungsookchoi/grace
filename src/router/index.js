import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 해시 bang모드를 사용하지 않고 history로 사용하면 url에서 #을 제거
  routes : [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/b/:bid', component: Board, children:[
      { path: 'c/:cid', component: Card }
  ]},
  { path: '*', component: NotFound }
]
})

export default router