import { BASKET_REQUEST,
         CHANGE_COUNT_ITEM,
         BASKET_CHANGE_COUNT_ITEM_SUCCESS,
         BASKET_SUCCESS,
         BASKET_ERROR,
         INCREASE_ITEM,
         DECREASE_ITEM,
         BASKET_INCREASE_ITEM_SUCCESS,
         BASKET_DECREASE_ITEM_SUCCESS,
         DELETE_ITEM,
         BASKET_DELETE_ITEM_SUCCESS,
         CLEAR_BASKET,
         CLEAR_BASKET_SUCCESS } from '../actions/basket'
import Vue from 'vue'

const state = { basket: [] }

const getters = {
  basket: state => state.basket,
}

const actions = {
  [BASKET_REQUEST]: async(context) => {
    if (localStorage.getItem('basket')) {
      try {
        context.commit(BASKET_SUCCESS, JSON.parse(localStorage.getItem('basket')))
      } catch(e) {
        // eslint-disable-next-line
        console.log(e)
      }
    }
  },
  [CHANGE_COUNT_ITEM]: async(context, payload) => {
    context.commit(BASKET_CHANGE_COUNT_ITEM_SUCCESS, payload)
  },
  [INCREASE_ITEM]: async(context, payload) => {
    context.commit(BASKET_INCREASE_ITEM_SUCCESS, payload)
  },
  [DECREASE_ITEM]: async(context, payload) => {
    context.commit(BASKET_DECREASE_ITEM_SUCCESS, payload)
  },
  [DELETE_ITEM]: async(context, payload) => {
    context.commit(BASKET_DELETE_ITEM_SUCCESS, payload)
  },
  [CLEAR_BASKET]: async(context) => {
    context.commit(CLEAR_BASKET_SUCCESS)
  }
}

const mutations = {
  [BASKET_SUCCESS]: (state, data) => {
    state.basket = data;
  },
  [BASKET_ERROR]: () => {
    this.$router.push('/goods')
  },
  [BASKET_CHANGE_COUNT_ITEM_SUCCESS]: (state, payload) => {
    let idx = state.basket.findIndex( curVal => curVal.ID == payload.Item.ID)
    if ( idx != -1 ) {
      payload.Item.Count = payload.Count
      state.basket[idx] = payload.Item
      localStorage.setItem('basket', JSON.stringify(state.basket))
    }
  },
  [BASKET_INCREASE_ITEM_SUCCESS]: (state, payload) => {
    let idx = state.basket.findIndex( curVal => curVal.ID == payload.ID)
    if ( idx != -1 ) {
      let item = state.basket[idx]
      item.Count += 1
      Vue.set(state.basket, idx, item)
    } else {
      ++payload.Count
      payload.Time = Date.now()
      state.basket.push(payload)
    }
    localStorage.setItem('basket', JSON.stringify(state.basket))
  },

  [BASKET_DECREASE_ITEM_SUCCESS]: (state, payload) => {
    let idx = state.basket.findIndex( curVal => curVal.ID == payload.ID)
    if ( idx != -1 ) {
      let item = state.basket[idx]
      if ( --item.Count == 0 ) {
        state.basket.splice(idx, 1)
      } else {
        Vue.set(state.basket, idx, item)
      }
      localStorage.setItem('basket', JSON.stringify(state.basket))
    }
  },
  [BASKET_DELETE_ITEM_SUCCESS]: (state, payload) => {
    let idx = state.basket.findIndex( (curVal) => {
      return curVal.ID == payload.ID
    })
    if ( idx != -1 ) {
      state.basket.splice(idx, 1)
      localStorage.setItem('basket', JSON.stringify(state.basket))
    }
  },
  [CLEAR_BASKET_SUCCESS]: (state) => {
    state.basket.splice(0, state.basket.length)
    localStorage.setItem('basket', JSON.stringify(state.basket))
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
