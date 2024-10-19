import { createApp } from 'vue'
import App from './App.vue'
import '../style.css'
import router from './router'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

const app = createApp(App)
//路由挂载
app.use(router)
app.mount('#app')
