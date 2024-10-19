//路由和哈希模式
import {createRouter , createWebHashHistory} from 'vue-router'

import Layout_P from '@/components/Layout_P.vue'
import About_P from '@/views/About_P.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout_P
},
  {
    path: '/about',
    name: 'About',
    component: About_P
  }
]

// 路由器实例，创建后要在入口文件注册为插件
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router