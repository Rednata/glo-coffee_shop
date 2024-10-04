<template>
  <main>
    <div class="banner" :class="[pageName === 'coffee' ? 'coffepage-banner': 'goodspage-banner']">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 v-if="!isLoading" class="title-big">{{ product.name }}</h1>
      </div>
    </div>

    <section v-if="!isLoading" class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img class="shop__girl" :src="product.image" :alt="product.image">
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
              <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
              <div class="shop__point" v-if="product.country">
                <span>Country:</span>
                  {{ product.country }}
              </div>
              <div class="shop__point" v-if="product.description">
                <span>Description:</span>
                  {{ product.description }}
              </div>
              <div class="shop__point">
                <span>Price: </span>
                <span class="shop__point-price">{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <spinner-component v-else />
   </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import { preloader } from '@/mixins/preloader';

  export default {
  components: { NavBarComponent, SpinnerComponent },
  data() {
    return { }
  },
  mixins: [preloader],
  mounted() {
    console.log(`http://localhost:3000/${this.pageName}/${this.$route.params.id}`);
      fetch(`http://localhost:3000/${this.pageName}/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => {
          setTimeout(() => {
            this.hideLoader();
            this.$store.dispatch('setGoodsItem', data)
          }, 500)
        });
    },
    destroyed() {
      this.$store.dispatch('setGoodsItem', null)
    },
  computed: {
    pageName() {
      return this.$route.name
    },
    product() {
      return this.$store.getters['getItem'];
    },
    // isLoading() {
    //   return this.$store.getters['getIsLoading'];
    // }
  }
  }
</script>

<style lang="scss" scoped>

</style>