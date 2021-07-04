<template>
    <div>
        <input :id="id" type="checkbox" :checked="completed" @change="toggleCompletion()"/>
        <label :for="id" >{{text}}</label>


    </div>
</template>
<script type="ts">
import { MutationType } from '@/store/mutations'
import { defineComponent } from 'vue'
import {useStore} from 'vuex'
export default defineComponent({
    props:{
        id:{type:Number,require:true},
        text:{type:String,require:true},
        completed:{type:Boolean, require:true}
    },
    setup(props) {
        const store =  useStore()
        const toggleCompletion = () => {
            store.commit(MutationType.CompeleteItem, {
                id:props.id,
                completed:!props.completed
            })
        }
        return {toggleCompletion}
    }
})
</script>
