const coffee = {
  state: {
    coffee: [
      // {id: 0, text: 'Solimo Coffee Beans 2kg', imgUrl: 'coffee-1.jpg', price: 10.73},
      // {id: 1, text: 'Presto Coffee Beans 1kg', imgUrl: 'coffee-2.jpg', price: 15.99},
      // {id: 2, text: 'AROMISTICO Coffee 1kg', imgUrl: 'coffee-3.jpg', price: 6.99},
      // {id: 3, text: 'Solimo Coffee Beans 2kg', imgUrl: 'coffee-1.jpg', price: 10.73},
      // {id: 4, text: 'Presto Coffee Beans 1kg', imgUrl: 'coffee-2.jpg', price: 15.99},
      // {id: 5, text: 'AROMISTICO Coffee 1kg', imgUrl: 'coffee-3.jpg', price: 6.99},
    ],
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data
    }
  },
  actions: {
    setCoffeeData({commit}, data) {
    commit('setCoffeeData', data);
    }
  },
  getters: {
    getCoffee(state) {
      return state.coffee;
    },
    getProductById(state) {
      return (id) => state.coffee.find((card) => card.id === Number(id));
    }
  }
}

export default coffee;
