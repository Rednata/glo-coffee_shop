<template>
  <div>
    <h1>Theme: {{ title }}</h1>
    <ul>
      <li v-for="post in posts" :class="post.checked ? 'checked' : ''">
        <img :src="require(`@/assets/ls-4/images/${post.icon}`)" :alt="post.icon">
        <span>{{ post.text }}</span>
      </li>

    </ul>

    <span class="total">Всего строк: {{ totalCount }}</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Data, Computed',
        posts: [
          {id: 0, text: 'Текст первый', icon: 'setting.png', checked: false},
          {id: 1, text: 'Текст второй', icon: 'user.png', checked: true},
          {id: 2, text: 'Текст третий', icon: 'phone.png',  checked: false},
        ]
      }
    },
    computed: {
      totalCount () {
        return this.posts.length
      }
    }
  }
</script>

<style lang="scss" scoped>
ul {
  list-style: none;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      margin-right: 10px;
    }

    &:hover {
      color: red;
    }

    &.checked {
      color: rgb(135, 202, 35);
    }
  }
}

.total {
  padding-left: 40px;
}
</style>