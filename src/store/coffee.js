const coffee = {
  state: {
    coffee: [],
    searchValue: '',
    sortValue: '',
  },
  mutations: {
    setCoffeeData(state, payload) {
      state.coffee = payload
    },
    setSearchValue(state, payload) {
      state.searchValue = payload
    },
    setSortValue(state, payload) {
      console.log('payload: ', payload);
      state.sortValue = payload
    }
  },
  actions: {
    setCoffeeData({commit}, payload) {
      commit('setCoffeeData', payload)
    },
    setSearchValue({commit}, payload) {
      commit('setSearchValue', payload)
    },
    setSortValue({commit}, payload) {
      commit('setSortValue', payload)
    }
  },
  getters: {
    getCoffee(state) {
      if (state.sortValue) {
        return state.coffee
        .filter(item => (
          item.name.toLowerCase().includes(state.searchValue.toLowerCase())
        ))
        .filter(item => {
            return item.country.toLowerCase() === state.sortValue.toLowerCase()}  
          );
      } else {
        return state.coffee
        .filter(item => (
          item.name.toLowerCase().includes(state.searchValue.toLowerCase())
        ))
      }
    },
    getProductById(state) {
      return (id) => state.coffee.find((card) => card.id === Number(id));
    },
    getSearchValue(state) {
      return state.searchValue;
    },
  }
}

export default coffee;
