import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import myPlugin from '../lib/index'
import '../lib/style.css'

const app =  createApp(App)
app.use(myPlugin)
app.mount('#app')
