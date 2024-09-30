<template>
  <main>
    <div class="banner" :class="[pageName === 'coffee' ? 'coffepage-banner': 'goodspage-banner']">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 v-if="product" class="title-big">{{ product.name }}</h1>
      </div>
    </div>

    <section v-if="product" class="shop">
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
      // product: null
    }
  },
  mounted() {
      fetch(`http://localhost:3000/${this.pageName}/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => this.$store.dispatch('setGoodsItem', data));
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
    }
  //   card() {
  //     const pageGetter = this.pageName === 'coffee' ? 'getProductById' : 'getGoodsById';
  //     console.log('pageGetter: ', pageGetter);
  //     const card = this.$store.getters[pageGetter](this.$route.params.id)
  //     console.log('card: ', card);
  //     return card;
  //   },
  }
  }
</script>

<style lang="scss" scoped>

</style>