<template>
  <li :class="classLink" >
    <router-link :to="link">{{ text }}
      <slot/>
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