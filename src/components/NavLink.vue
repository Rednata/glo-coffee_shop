<template>
  <li :class="classItem" >
    <router-link v-if="icon" :to="link">
      <img :src="require(`@/assets/logo/${icon}`)" :alt="icon">
    </router-link>
    <router-link :to="link">
      {{ text }}
    </router-link>
  </li>
</template>

<script>
  export default {
    props: {
      classItem: String,
      text: {
        type: String,
        required: true,
        default: ''
      },
      link: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>