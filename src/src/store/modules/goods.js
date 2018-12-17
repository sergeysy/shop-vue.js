//import { GOODS_REQUEST, GOODS_ERROR, GOODS_SUCCESS } from '../actions/goods'
//import Vue from 'vue'


const state = { goods: [{ID: 1, Name: 'Печеньки(оченьоченьоченьоченьоченьоченьоченьоченьоченьоченьоченьоченьоченьдлинноеназваниепеченьки)', Picture: require('@/assets/cook.jpg'), Price: 11, Time: 0, Count: 0},
                        {ID: 2, Name: 'Хлебушек', Picture: require('@/assets/bread-slices.jpg'), Price: 15, Time: 0, Count: 0},
                        {ID: 3, Name: 'Сальце', Picture: require('@/assets/salo.jpg'), Price: 29, Time: 0, Count: 0},
                        {ID: 4, Name: 'Солёный огурчик', Picture: require('@/assets/pickle.jpg'), Price: 16, Time: 0, Count: 0},
                        {ID: 5, Name: 'Солонка', Picture: require('@/assets/salt.jpg'), Price: 4, Time: 0, Count: 0},] }

const getters = {
  goods: state => state.goods,
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
}
