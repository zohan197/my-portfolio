import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { Motion  } from '@motionone/vue'
import Lenis from 'lenis'
import { createPinia } from 'pinia'
import { VueReCaptcha } from 'vue-recaptcha-v3';

const app = createApp(App)
const pinia = createPinia()

// Initialize Lenis
new Lenis({
  autoRaf: true,
  anchors: {
    offset: 0,
  }
});

app.use(VueReCaptcha, {
  siteKey: '6Lc4_EorAAAAAEW-oK7NAGzkgkUU-khiwK24d033', // 🔁 replace this
  loaderOptions: {
    autoHideBadge: true,
  },
});
app.use(pinia)
app.component('Motion', Motion)
app.use(router)
app.mount('#app')
