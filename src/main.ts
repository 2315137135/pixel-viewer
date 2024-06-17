import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

let vueApp = createApp(App)

// naive-ui style
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

vueApp.mount('#app')

