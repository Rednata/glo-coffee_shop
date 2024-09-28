const bestsellers = {
  state: {
    bestsellers: [
      {id: 0, text: 'Solimo Coffee Beans 2kg', imgUrl: 'coffee-1.jpg', price: 10.73},
      {id: 1, text: 'Presto Coffee Beans 1kg', imgUrl: 'coffee-2.jpg', price: 15.99},
      {id: 2, text: 'AROMISTICO Coffee 1kg', imgUrl: 'coffee-3.jpg', price: 6.99},
    ]
  },
  getters: {
    getBestsellers(state) {
      return state.bestsellers;
    }
  }
}

export default bestsellers;
