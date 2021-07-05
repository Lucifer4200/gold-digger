import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import router from './router'

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
