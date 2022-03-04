import { createApp } from 'vue'
import router from '@/router'
import VueToast from 'vue-toast-notification'

import App from './App.vue'
import store from './store'
import 'vue-toast-notification/dist/theme-sugar.css'
import './tailwind.css'

createApp(App).use(router).use(store).use(VueToast).mount('#app')
