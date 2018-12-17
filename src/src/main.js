import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Vuex from 'vuex'

Vue.use(Vuex)


Vue.config.productionTip = false

new Vue({
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    };
  },
  render: h => h(App),
  router,
  store,
}).$mount('#app')
