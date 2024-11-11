import './css/top.css'
import './css/HomePage.css'
import './css/Boutique.css'
import './css/PopularRankings.css'
import './css/pop.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
