<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <nav-link
        v-for="link in links" :key="link.id"
        classItem="header__item"
        :text="link.text"
        :link="link.link"
        :icon="link.icon"
      />
      <!-- <li v-for="link in links" class="header__item" :key="link.id">
        <router-link v-if="link.icon" :to="link.link">
          <img v-if="link.icon" :src="require(`@/assets/logo/${link.icon}`)" :alt="link.icon">
        </router-link>
        <router-link v-else :to="link.link">
          {{ link.text }}
        </router-link>
      </li> -->
    </ul>
  </header>
</template>

<script>
import NavLink from './NavLink.vue';
  export default {
    components: {NavLink},
    data () {
      return {
        links: [
          {id: 0, link: '/', icon: 'Logo.svg'},
          {id: 1, text: 'Our coffee', link: '/our-coffee'},
          {id: 2, text: 'For your pleasure', link: '/for-your-pleasure'},
          {id: 3, text: 'Contact us', link: '/contact-us'},
        ]
      }
    }
  }
</script>
