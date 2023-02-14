import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DashboardLayout from "./components/DashboardLayout.vue";

import './assets/main.css'
import './assets/style.css'

const app = createApp(App)

app.component("default-layout", DashboardLayout);
app.use(createPinia())
app.use(router)

app.mount('#app')
