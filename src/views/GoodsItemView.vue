<template>
  <main>
    <div class="banner" :class="[pageName === 'coffee' ? 'coffepage-banner': 'goodspage-banner']">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big" v-if="product">{{ product.name }}</h1>
      </div>
    </div>

    <section class="shop" v-if="product">
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

  export default {
  components: { NavBarComponent },
  data() {
    return {
    }
  },
  mounted() {
    const pagePath = this.pageName === 'coffee' ? 'coffee' : 'goods'
    fetch(`http://localhost:3000/${pagePath}/${this.$route.params.id}`)
      .then(res => res.json())
      .then(data => this.$store.dispatch('setGoodsItemData', data));
  },
  destroyed() {
    this.product = null;
  },
  computed: {
    pageName() {
      return this.$route.name
    },
    product() {
      const product = this.$store.getters['getGoodsItem'];
      return product;
    },
  }
  }
</script>

<style lang="scss" scoped>

</style>