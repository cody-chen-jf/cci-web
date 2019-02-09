import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import './index.less'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

window.vue = new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
