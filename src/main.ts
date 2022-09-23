import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './index.css'


const app = createApp(App)
//use router 
app.use(router)

// Initialize pinia
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
