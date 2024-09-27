import Vue from 'vue'
import App from './App.vue'
// import App2 from './App2.vue'
import './assets/scss/style.scss'
import router from './router/index'
import store from './store'
Vue.config.productionTip = false
import './filters'

// new Vue({
//   router,
//   render: h => h(App2),
// }).$mount('#app')


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
