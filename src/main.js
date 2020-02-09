import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from "@/plugins/vuetify"
import 'material-design-icons'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
