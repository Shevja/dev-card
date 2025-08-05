import {createApp} from 'vue'
import App from './App.vue'
import '@/assets/styles/style.css'
import naive from 'naive-ui'
import { breakpointsTailwind } from "@vueuse/core";

breakpointsTailwind.xs = 480;

createApp(App)
    .use(naive)
    .mount('#app')
