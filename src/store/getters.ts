import { GetterTree } from "vuex";
import {State} from './state'


export enum GettersTypes {
    completedCount = 'COMPLETED_COUNT',
    totalCount = 'TOTAL_COUNT'
}
export type Getters = {
    [GettersTypes.completedCount](state:State):number
    [GettersTypes.totalCount](state:State):number
}

export const getters: GetterTree<State,State> & Getters = {
    [GettersTypes.completedCount](state) {
        return state.items.filter(i=>i.completed).length
    },
    [GettersTypes.totalCount](state) {
        return state.items.length
    }
}