<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <li v-for="link in links" class="header__item" :key="link.id">
        <router-link v-if="link.icon" :to="link.link">
          <img v-if="link.icon" :src="require(`@/assets/logo/${link.icon}`)" :alt="link.icon">
        </router-link>
        <router-link v-else :to="link.link">
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
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
