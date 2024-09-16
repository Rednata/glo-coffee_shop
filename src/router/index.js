import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroView from '@/views/HeroView.vue';
import OurCoffeeView from '@/views/OurCoffeeView.vue';
import ForYourPleasureView from '@/views/ForYourPleasureView.vue';
import ContactsUsView from '@/views/ContactsUsView.vue';
import ThankYouView from '@/views/ThankYouView.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/for-your-pleasure', component: ForYourPleasureView },
  { path: '/contact-us', component: ContactsUsView },
  { path: '/thank-you', component: ThankYouView }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router;
