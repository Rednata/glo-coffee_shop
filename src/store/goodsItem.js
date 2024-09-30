const goodsItem = {
  state: {
    item: { }
  },
  mutations: {
    setGoodsItem(state, payload) {
      state.item = payload
    }
  },
  actions: {
    setGoodsItem({commit}, payload) {
      commit('setGoodsItem', payload)
    }
  },
  getters: {
    getItem(state) {
      return state.item
    }
  }
}

export default goodsItem;
