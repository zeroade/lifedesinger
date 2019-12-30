import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Owl
import 'owl.carousel'
// Owl Styles
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'owl.carousel/dist/assets/owl.theme.green.css'
import 'owl.carousel/dist/assets/owl.carousel.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
