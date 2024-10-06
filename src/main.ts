import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './index.css'

// components
import MdIcon from '../src/components/MdIcon.vue'
import PageView from '../src/components/PageView.vue'


const app = createApp(App)
//use router 
app.use(router)

// Initialize pinia
const pinia = createPinia()
app.use(pinia)

// Global registration of component
app.component('MdIcon', MdIcon)
app.component('PageView', PageView)

app.mount('#app')
