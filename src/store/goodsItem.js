const goodsItem = {
  state: {
    initGoodsItem: {
      country: '',
      description: '',
      id: '',
      image: '',
      name: '',
      price: ''
    },
    goodsItem: {
      country: '',
      description: '',
      id: '',
      image: '',
      name: '',
      price: ''
    },
    isLoading: false,
  },
  mutations: {
    setGoodsItemData(state, payload) {
      state.goodsItem = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    setGoodsItemData({commit, state}, payload) {
      if (payload === null) {
        commit('setGoodsItemData', state.initGoodsItem);
      } else commit('setGoodsItemData', payload)
    },
    setIsLoading({commit}, data) {
      commit('setIsLoading', data)
    }
  },
  getters: {
    getGoodsItem(state) {
      return state.goodsItem;
    },
    isLoading(state) {
      return state.isLoading;
    }
  }
}

export default goodsItem;
