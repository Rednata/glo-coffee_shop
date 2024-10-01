import Vue from "vue";
import Vuex from 'vuex';
import links from "./links";
import bestsellers from "./bestsellers";
import coffee from "./coffee";
import goods from "./goods";
import goodsItem from "./goodsItem";
import globalVar from "./globalVar";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links, bestsellers, coffee, goods, goodsItem, globalVar
  }
});

export default store;
