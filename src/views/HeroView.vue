<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav-bar-component />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <header-title title="Everything You Love About Coffee" class="title-big" />
            <img class="beanslogo" src="@/assets/logo/Beans_logo.svg" alt="Beans logo">
            <div class="preview__subtitle">We makes every day full of energy and taste</div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <a @click.prevent="smoothScroll" href="our-coffee" class="preview__btn">More</a>
            <!-- <router-link to="our-coffee" class="preview__btn">More</router-link> -->
          </div>
        </div>
      </div>
    </div>
    <section class="about" ref="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
            <div class="about__text">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.<br><br>

                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best" ref="ourBest">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <product-card
                v-for="card in bestsellers"
                classItem="best__item"
                :card="card"
                :key="card.id"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { scrollIntoView } from "seamless-scroll-polyfill";
import NavBarComponent from '@/components/NavBarComponent.vue'
import ProductCard from '@/components/ProductCard.vue'
import HeaderTitle from '@/components/HeaderTitle.vue';
  export default {
    components: {NavBarComponent, ProductCard, HeaderTitle},
    data () {
      return {
      }
    },
    methods: {
      smoothScroll() {
        // this.$refs.ourBest.scrollIntoView({
        //   block: 'start',
        //   behavior: 'smooth'
        // });
        scrollIntoView(this.$refs.ourBest, {
          behavior: "smooth", block: "center", inline: "center"
        });
      }
    },
    async mounted() {
      const res = await fetch('http://localhost:3000/bestsellers')
      const data = await res.json()
      this.$store.dispatch('setBestsellersData', data)
    },
    computed: {
      bestsellers() {
        return this.$store.getters["getBestsellers"]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
