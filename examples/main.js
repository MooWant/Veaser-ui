import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../components/css/demo.scss'
import '../components/css/cart.scss'
import '../components/css/row.scss'
import '../components/css/header.scss'
import '../components/css/button.scss'
import '../components/css/spinner.scss'
import '../components/css/accordion.scss'
import '../components/css/scard.scss'
import '../components/css/input.scss'
import '../components/css/clock.scss'
import '../components/css/translater.scss'
import v_demo from '../components/lib/v_demo/index.js'
import v_cart from '../components/lib/v_cart/index.js'
import v_row from '../components/lib/v_row/index.js'
import v_header from '../components/lib/v_header/index'
import v_button from '../components/lib/v_button/index'
import v_spinner from '../components/lib/v_spinner/index'
import v_accordion from '../components/lib/v_accordion/index'
import v_scard from '../components/lib/v_scard/index'
import v_icon from '../components/lib/v_icon/index'
import v_input from '../components/lib/v_input/index'
import v_clock from '../components/lib/v_clock/index'
import v_translater from '../components/lib/v_translater/index'
// Vue.mixin({
//   data() {
//     return {
//       v_clock: 'v-clock-dark',
//       clock: 'clock-dark',
//       clock_bg_dark: 'clock-bg-dark',
//       message: 'dasfa',
//       status: true
//     }
//   },
//   methods: {
//     mixinMethod() {
//       console.log(this.v_clock)
//       this.status = false
//       console.log(this.status)
//     }
//   }
// })
Vue.use(v_demo)
Vue.use(v_cart)
Vue.use(v_row)
Vue.use(v_header)
Vue.use(v_button)
Vue.use(v_spinner)
Vue.use(v_accordion)
Vue.use(v_scard)
Vue.use(v_icon)
Vue.use(v_input)
Vue.use(v_clock)
Vue.use(v_translater)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
