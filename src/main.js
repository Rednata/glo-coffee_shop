import Vue from 'vue'
// import App from './App.vue'
import App2 from './App2.vue'
import './assets/scss/style.scss'
import router from './router/index'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App2),
}).$mount('#app')

const counter = (a, b) => a + b;

console.log(counter(2, 5));


// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
