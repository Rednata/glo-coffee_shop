<template>
  <div>
    <h1>Theme: {{ title }}</h1>
    <ul>
      <list-item
        v-for="post in posts" :class="post.checked ? 'checked' : ''"
        :text="post.text"
        :icon="post.icon"
      />
    </ul>

    <span class="total">Всего строк: {{ totalCount }}</span>
  </div>
</template>

<script>
import ListItem from './components/ListItem.vue';
  export default {
    components: {ListItem},
    data () {
      return {
        title: 'Props',
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