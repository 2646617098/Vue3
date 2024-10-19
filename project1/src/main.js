import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/router'


// 入口文件
// 导入 Bootstrap 样式
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

const app = createApp(App)
//路由挂载
app.use(router)
app.mount('#app')
