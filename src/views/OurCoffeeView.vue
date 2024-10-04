<template>
<main>
  <div class="banner coffepage-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <nav-bar-component />
          </div>
        </div>
        <header-title title="Our Coffee" class="title-big" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl">
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
            <div class="col-lg-4 offset-2">
              <form action="#" class="shop__search">
                <label class="shop__search-label" for="filter">Looking for</label>
                <input
                  id="filter"
                  type="text"
                  placeholder="start typing here..."
                  class="shop__search-input"
                  v-model="searchValue"
                >
                {{ searchValue }}
              </form>
            </div>
            <div class="col-lg-4">
              <div class="shop__filter">
                <div class="shop__filter-label" @click="onResetSort">
                    Or filter
                </div>
                <div class="shop__filter-group">
                  <button class="shop__filter-btn" @click="onSort('Brazil')">Brazil</button>
                  <button class="shop__filter-btn"  @click="onSort('Kenya')">Kenya</button>
                  <button class="shop__filter-btn" @click="onSort('Columbia')">Columbia</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="shop__wrapper" v-if="!isLoading">
                <product-card
                  v-for="card in coffee"
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
import NavBarComponent from '@/components/NavBarComponent.vue'
import ProductCard from '@/components/ProductCard.vue'
import HeaderTitle from '@/components/HeaderTitle.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import { navigate } from '@/mixins/navigate';
import { preloader } from '@/mixins/preloader';

  export default {
    components: {NavBarComponent, ProductCard, HeaderTitle, SpinnerComponent},
    data () {
      return {
        name: 'coffee'
       }
    },
    computed: {
      coffee() {
        return this.$store.getters["getCoffee"];
      },
      searchValue: {
        set(value) {
          this.$store.dispatch('setSearchValue', value)
        },
        get() {
          return this.$store.getters['getSearchValue'];
        }
      }
      // isLoading() {
      //   return this.$store.getters['getIsLoading'];
      // }
    },
    mixins: [navigate, preloader],
    mounted() {
      fetch('http://localhost:3000/coffee')
        .then(res => {
          return res.json()
        })
        .then(data => {
          setTimeout(() => {
            this.hideLoader()
            this.$store.dispatch('setCoffeeData', data)
          }, 500)
        })
    },
    methods: {
      onResetSort() {
        this.$store.dispatch('setSortValue', '')
      },
      onSort(value) {
        this.$store.dispatch('setSortValue', value)

        // fetch(`http://localhost:3000/coffee?country=Brasil`)
        // .then(res => {
        //   return res.json()
        // })
        // .then(data => {
        //   console.log('data: ', data);
        //   setTimeout(() => {
        //     this.hideLoader()
        //     // this.$store.dispatch('setCoffeeData', data)
        //   }, 500)
        // })
      },
      onSearch(event) {
        fetch(`http://localhost:3000/coffee?q=${event.target.value}`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log('data: ', data);
          setTimeout(() => {
            this.hideLoader()
            // this.$store.dispatch('setCoffeeData', data)
          }, 500)
        })
        console.log('event: ', event.target.value);

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>