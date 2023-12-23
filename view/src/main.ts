import './assets/main.css'
import 'uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import hljs from 'highlight.js'
import 'virtual:uno.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
