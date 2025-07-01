import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import i18n from '../i18n'
import '@mdi/font/css/materialdesignicons.css'


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(i18n)
  .mount('#app')

