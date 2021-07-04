<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div v-if="loading">
    Loading
  </div>
  <div v-else>
    <NewItem msg="Welcome to Your Vue.js + TypeScript App"/>
    <TodoList/>
  </div>

</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import NewItem from './components/newItem.vue';
import TodoList from './components/todoList.vue'
import { ActionTypes } from './store/actions';
export default defineComponent({
  name: 'App',
  components: {
    NewItem,
    TodoList
  },
  setup() {
    const store = useStore();
    const loading = computed(()=>store.state.loading);
    onMounted(()=>store.dispatch(ActionTypes.GetToDoItems));
    return {loading}
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
