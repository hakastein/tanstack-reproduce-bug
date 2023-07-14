import Vue from 'vue'
import App from './App.vue'

import { VueQueryPlugin } from "@tanstack/vue-query";

Vue.use(VueQueryPlugin)

new Vue({
  render: (h) => h(App),
  errorCaptured(err, vm, info) {
    console.log('error captured');
    console.log(err);
    return false;
  }
}).$mount('#app')
