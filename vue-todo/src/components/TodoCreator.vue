<template>
  <div class="todo-creator">
    <input
      :value="title"
      type="text"
      placeholder="할 일을 추가하세요!"
      @input="title = $event.target.value"
      @keydown.enter="createTodo" />
    <button @click="createTodo">
      추가
    </button>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { todoStore } from '~/store/todo.js'

export default {
  data() {
    return {
      title: ''
    }
  },
  computed: {
    ...mapStores(todoStore) // 여기 todoStore는 todo.js의 'todoStore'와 같다.
  },
  methods: {
    createTodo(event) {
      if (event.isComposing) return // 한글 분석 중이면 return
      if (!this.title.trim()) return
      this.todoStore.createTodo(this.title) // 여기 todoStore는 todo.js의 'todo'와 같다.
      this.title = ''
    }
  }
}
</script>
