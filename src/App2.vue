<template>
  <div>
    <h1 v-show="isDirectives">Theme: Directive</h1>
    <h1 v-show="!isDirectives">Theme: {{ title }}</h1>
    <ul>
      <list-item
        v-for="post in posts"
        :class="post.checked ? 'checked' : ''"
        :key="post.id"
        :text="post.text"
        :icon="post.icon"
      >
      <template #pretext>
        <span>&nbsp;some-come-come text</span>
      </template>
      <span>&nbsp;some text</span>
      </list-item>
    </ul>

    <span class="total">Всего строк: {{ totalCount }}</span>
  </div>
</template>

<script>
import ListItem from './components/ListItem.vue';
import { v4 as uuidv4 } from 'uuid';
  export default {
    components: {ListItem},
    data () {
      return {
        title: 'Props',
        isDirectives: true,
        posts: [
          {id: uuidv4(), text: 'Текст первый', icon: 'setting.png', checked: false},
          {id: uuidv4(), text: 'Текст второй', icon: 'user.png', checked: true},
          {id: uuidv4(), text: 'Текст третий', icon: 'phone.png',  checked: false},
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