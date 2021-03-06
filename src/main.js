import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugin/element.js'  //引入element插件



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
