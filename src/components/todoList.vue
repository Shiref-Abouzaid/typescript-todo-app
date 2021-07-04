<template>
    <TodoItem v-for="item in items" :key="item.id" v-bind="item"/>
</template>
<script>
import { defineComponent, computed } from 'vue'
import TodoItem from '@/components/todoItem.vue'
import { useStore } from 'vuex'
export default defineComponent({
    components:{TodoItem},
    setup() {
        const store = useStore();
        const items = computed(() => store.state.items);
        return {items}
    },
})
</script>
