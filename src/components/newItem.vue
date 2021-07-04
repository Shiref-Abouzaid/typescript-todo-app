<template>
  <div>
    <form @submit.prevent="createTastk">
      <div>
        <input v-model="text" type="text" placeholder="What a task do you want to complete"/>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {useStore} from 'vuex'
import {defineComponent, ref} from 'vue'
//import {useStore} from '@/store';
import {TodoItem} from '@/store/state'

import {MutationType} from '@/store/mutations';

export default defineComponent({
  setup() {
    const text = ref('');
    const store = useStore();
    const createTastk = () => {
      if (text.value === '') return;
      const item:TodoItem = {
        id:Date.now(),
        text:text.value,
        completed:false
      }
      store.commit(MutationType.CreateItem, item);
      text.value = ''
    }

    return {createTastk, text}
  }
});


</script>

