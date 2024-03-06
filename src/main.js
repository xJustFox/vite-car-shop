import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import router  from './router.js'

createApp(App).use(router).mount('#app')
