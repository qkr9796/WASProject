import { createApp } from 'vue'
import App from './App.vue'
import index from './store'
import router from './router/router'


const app = createApp(App).use(index).use(router)
app.mount('#app')



