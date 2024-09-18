<template>
  <li >
    <img :src="require(`@/assets/ls-4/images/${icon}`)" >
    <span>{{ text }}</span>
  </li>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: '123',
        required: true
      },
      icon: {
        default: 'user.png'
      },
    }

  }
</script>

<style lang="scss" scoped>

</style>