<template>
  <div :class="classItem" @click="onEmit(card.id)">
    <img :src="require(`@/assets/img/${card.imgUrl}`)" :alt="card.imgUrl">
    <div class="best__item-title">
      {{card.text}}


    </div>
    <div class="best__item-price">{{ card.price }}$</div>
  </div>
</template>

<script>
  export default {
    props: {
      classItem: {
        type: String,
        required: false
      },
      card: {
        type: Object,
        required: true
      }
    },
    methods: {
      onEmit(id) {
        console.log('in ProductCard id: ', id);
        this.$emit('onNavigate', id)

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>