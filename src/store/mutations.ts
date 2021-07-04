import { MutationTree } from "vuex";
import {State, TodoItem} from './state'

export enum MutationType {
    CreateItem = 'CREATE_ITEM',
    SetItem = 'SET_ITEM',
    CompeleteItem = 'COMPLETE_ITEM',
    SetLoading = 'SET_LOADING'
}

export type Mutations = {
    [MutationType.CreateItem](state:State, item:TodoItem):void
    [MutationType.SetItem](state:State,items:TodoItem[]):void
    [MutationType.CompeleteItem](
        state:State,
        item:Partial<TodoItem> & {id:number}
    ):void
    [MutationType.SetLoading](state:State,value:boolean):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateItem](state, item) {
        state.items.unshift(item);
    },
    [MutationType.SetItem](state, items) {
        state.items = items
    },
    [MutationType.CompeleteItem](state, newItem) {
        const item = state.items.findIndex(s=>s.id === newItem.id)
        if(item === -1) return 
        state.items[item] = {...state.items[item],...newItem}
    },
    [MutationType.SetLoading](state,value) {
        state.loading = value
    }
}