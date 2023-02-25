import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'


const app = createApp(App).use(store).use(router)
app.mount('#app')



