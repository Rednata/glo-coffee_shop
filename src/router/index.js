import Vue from 'vue';
import VueRouter from 'vue-router';

import Hero from '@/views/Hero.vue';
import OurCoffeeView from '@/views/OurCoffee.vue';
import GoodsPageView from '@/views/GoodsPage.vue';
import ContactsPageView from '@/views/ContactsPage.vue';
import ThanksPageView from '@/views/ThanksPage.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Hero },
  { path: '/our-coffee.html', component: OurCoffeeView },
  { path: '/goodspage.html', component: GoodsPageView },
  { path: '/contacts.html', component: ContactsPageView },
  { path: '/thanks.html', component: ThanksPageView }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router;
