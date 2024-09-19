<template>
  <li :class="classLink" >
    <!-- <router-link v-if="icon" :to="link">
      <img :src="require(`@/assets/logo/${icon}`)" :alt="icon">
    </router-link> -->
    <router-link :to="link">{{ text }}
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
  export default {
    props: {
      link: {
        type: String,
        required: true,
      },
      classLink: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: false,
        default: ''
      },
      icon: {
        type: String,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>