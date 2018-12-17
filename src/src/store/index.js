import Vue from 'vue'
import Vuex from 'vuex'
import basket from './modules/basket'
import goods from './modules/goods'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    basket,
    goods,
  },
  strict: debug,
})
