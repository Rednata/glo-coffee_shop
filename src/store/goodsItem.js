const goodsItem = {
  state: {
    goodsItem: {
      country: '',
      description: '',
      id: '',
      image: '',
      name: '',
      price: ''
    }
  },
  mutations: {
    setGoodsItemData(state, payload) {
      state.goodsItem = payload;
    }
  },
  actions: {
    setGoodsItemData({commit}, payload) {
      commit('setGoodsItemData', payload)
    }
  },
  getters: {
    getGoodsItem(state) {
      return state.goodsItem;
    }
  }
}

export default goodsItem;
