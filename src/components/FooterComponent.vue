<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-item
              classLink="footer__item"
              :link="links.footer.link"
              :icon="links.footer.icon"
            >
              <img :src="require(`@/assets/logo/${links.footer.icon}`)" :alt="links.footer.icon">
            </nav-item>
            <nav-item
              v-for="link in links.other" :key="link.id"
              classLink="footer__item"
              :text="link.text"
              :link="link.link"
              :icon="link.icon"
            />

          </ul>
        </div>
      </div>
      <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
    </div>
  </footer>
</template>

<script>
import NavItem from './NavItem.vue';
  export default {
    components: {NavItem},
    data () {
      return {

      }
    },
    computed: {
      links() {
        return this.$store.getters["getFooterLinks"];
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>