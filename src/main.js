import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import store from './store'
import './tailwind.css'

createApp(App).use(router).use(store).mount('#app')
