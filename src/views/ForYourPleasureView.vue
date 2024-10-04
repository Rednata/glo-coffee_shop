<template>
<main>
  <div class="banner goodspage-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <nav-bar-component />
        </div>
      </div>
      <header-title title="For your pleasure" class="title-big" />
    </div>
  </div>
  <section class="shop">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-2">
          <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
        </div>
        <div class="col-lg-4">
          <div class="title">About our beans</div>
          <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
          <div class="shop__text">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br><br>
            Afraid at highly months do things on at. Situation recommend objection do intention<br>
            so questions. <br>
            As greatly removed calling pleased improve an. Last ask him cold feel<br>
            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
            is song that held help face.
          </div>
        </div>
      </div>

      <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper" v-if="!isLoading">
              <product-card
                v-for="card in goods"
                classItem="shop__item"
                :card="card"
                :key="card.id"
                @onNavigate="navigate"
              />
            </div>
            <spinner-component v-else />
          </div>
      </div>
    </div>
  </section>
</main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import ProductCard from '@/components/ProductCard.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import HeaderTitle from '@/components/HeaderTitle.vue';
import { navigate } from '@/mixins/navigate';
import { preloader } from '@/mixins/preloader';
  export default {
    components: {NavBarComponent, ProductCard, HeaderTitle, SpinnerComponent},
    data() {
      return {
        name: 'goods'
      }
    },
    mixins: [navigate, preloader],
    async mounted() {
      const res = await fetch('http://localhost:3000/goods')
      const data = await res.json()
      setTimeout(() => {
        this.hideLoader();
        this.$store.dispatch('setGoodsData', data)
      }, 1500)
    },
    computed: {
      goods() {
        return this.$store.getters["getGoods"]
      },
      // isLoading() {
      //   return this.$store.getters['getIsLoading'];
      // }
    },
  }
</script>

<style lang="scss" scoped>

</style>