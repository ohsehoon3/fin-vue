<template>
  <main>
    <nav>
      <div class="title"></div>
      <ul></ul>
      <div class="actions"></div>
    </nav>
    <div class="workspace">
      <header></header>
      <div class="workspace__contents">
        <!-- BEM 표기법 부모의 일부분임을 의미하는 표기법. __ : 일부분, -- : 상태 -->
        <RouterView />
      </div>
    </div>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useWorkspaceStore } from './store/workspace'

export default {
  computed: {
    ...mapStores(useWorkspaceStore)
  },
  created() {
    this.workspaceStore.readWorkspaces()
  }
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  height: 100vh;
  nav {
    flex-shrink: 0;
    width: 260px;
    border: 10px solid;
    display: flex;
    flex-direction: column;
    .title {
      height: 80px;
      border: 10px solid red;
    }
    ul {
      flex-grow: 1;
      border: 10px solid green;
    }
    .actions {
      height: 150px;
      border: 10px solid orange;
    }
  }
  .workspace {
    flex-grow: 1;
    border: 10px solid red;
  } 
}
</style>
