import Vue from 'vue'

import App from './App.vue'

import { EventBus } from '@/plugins/event-bus'

import '@/assets/stylesheet/main.css'

Vue.config.productionTip = false

Vue.prototype.$bus = EventBus

new Vue({
  render: h => h(App),
}).$mount('#app')