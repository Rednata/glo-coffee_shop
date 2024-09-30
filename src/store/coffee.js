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
    setCoffeeData(state, payload) {
      state.coffee = payload
    }
  },
  actions: {
    setCoffeeData({commit}, payload) {
      commit('setCoffeeData', payload)
    }
  },
  getters: {
    getCoffee(state) {
      return state.coffee;
    },
    getProductById(state) {
      console.log('state: ', state);
      return (id) => {
        console.log('id: ', id);
        const temp = state.coffee.find((card) => {
          console.log('card: ', card);

          return card.id === id
        })
        console.log('temp: ', temp);
        return temp

        // return state.coffee.find((card) => card.id === Number(id)

    }
    }
  }
}

export default coffee;
