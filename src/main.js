import { createApp } from 'vue'
import router from '@/router'
import PrimeVue from 'primevue/config'
import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const myApp = createApp(App)
myApp.use(PrimeVue).use(router)

myApp.mount('#app')
