import Vue from 'vue'
import Router from 'vue-router'

import Goods from '@/components/goods'
import Basket from '@/components/basket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods,
    },
    {
      path: '/',
      name: 'Goods',
      component: Goods,
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket,
    },
  ]
})