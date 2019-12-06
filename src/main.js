import Vue from 'vue'
import vb from 'vue-babylonjs'
import App from './App.vue'

Vue.use(vb)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
