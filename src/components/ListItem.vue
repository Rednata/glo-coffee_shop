<template>
  <li >
    <img :src="require(`@/assets/ls-4/images/${icon}`)" >
    <slot name="pretext"></slot>
    <span v-html="`<b>${text}</b>`"></span>

    <slot></slot>
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