import { createApp } from 'vue'
import App from './App.vue'
import './style.css' 
import router from './router/index.js'

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = '喵工大罐头事务所猫咪管理系统'
    }
    next()
})

createApp(App).use(router).mount('#app')