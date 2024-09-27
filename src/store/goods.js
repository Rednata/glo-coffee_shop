const goods = {
  state: {
    goods: [
      {id: 0, text: 'Solimo Coffee Beans 2kg', imgUrl: 'coffee-1.jpg', price: 10.73},
      {id: 1, text: 'Presto Coffee Beans 1kg', imgUrl: 'coffee-2.jpg', price: 15.99},
      {id: 2, text: 'AROMISTICO Coffee 1kg', imgUrl: 'coffee-3.jpg', price: 6.99},
      {id: 3, text: 'Solimo Coffee Beans 2kg', imgUrl: 'coffee-1.jpg', price: 10.73},
      {id: 4, text: 'Presto Coffee Beans 1kg', imgUrl: 'coffee-2.jpg', price: 15.99},
      {id: 5, text: 'AROMISTICO Coffee 1kg', imgUrl: 'coffee-3.jpg', price: 6.99},
    ]
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
    getGoodsById(state) {
      return (id) => state.goods.find(item => item.id === Number(id))
    }
  }
}

export default goods;
