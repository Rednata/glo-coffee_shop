<template>
  <main>
    <div class="banner" :class="[pageName === 'coffee' ? 'coffepage-banner': 'goodspage-banner']">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big" v-if="!isLoading">{{ product.name }}</h1>
      </div>
    </div>
    <spinner-component v-if="isLoading"/>
    <section class="shop" v-else>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img class="shop__girl" :src="product.image" :alt="product.image">
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
              <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
              <div class="shop__point">
                <span>Country:</span>
                  {{ product.country }}
              </div>
              <div class="shop__point">
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
   </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
  export default {
  components: { NavBarComponent, SpinnerComponent },
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('setIsLoading', true)
    const pagePath = this.pageName === 'coffee' ? 'coffee' : 'goods'
    fetch(`http://localhost:3000/${pagePath}/${this.$route.params.id}`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          this.$store.dispatch('setGoodsItemData', data)
          this.$store.dispatch('setIsLoading', false)
      }, 1000)
      });
  },
  destroyed() {
    this.$store.dispatch('setGoodsItemData', null)
  },
  computed: {
    pageName() {
      return this.$route.name
    },
    product() {
      return this.$store.getters['getGoodsItem'];
    },
    isLoading() {
      return this.$store.getters['isLoading'];
    }
  }
  }
</script>

<style lang="scss" scoped>

</style>