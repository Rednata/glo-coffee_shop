<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-link
              v-for="link in links" :key="link.id"
              class="footer__item"
              :text="link.text"
              :link="link.link"
              :icon="link.icon"
            />
            <!-- <li v-for="link in links" class=" footer__item" :key="link.id">
              <router-link v-if="link.icon" :to="link.link">
                <img v-if="link.icon" :src="require(`@/assets/logo/${link.icon}`)" :alt="link.icon">
              </router-link>
              <router-link v-else :to="link.link">
                {{ link.text }}
              </router-link>
            </li> -->
          </ul>
        </div>
      </div>
      <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
    </div>
  </footer>
</template>

<script>
import NavLink from './NavLink.vue';
  export default {
    components: {NavLink},
    data () {
      return {
        links: [
          {id: 0, link: '/', icon: 'Logo_black.svg'},
          {id: 1, text: 'Our coffee', link: '/our-coffee'},
          {id: 2, text: 'For your pleasure', link: '/for-your-pleasure'},
          {id: 3, text: 'Contact us', link: '/contact-us'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>