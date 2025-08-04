import {createApp} from 'vue'
import App from './App.vue'
import '@/assets/styles/style.css'
import naive from 'naive-ui'

createApp(App)
    .use(naive)
    .mount('#app')
