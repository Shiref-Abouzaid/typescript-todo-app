import {ActionContext, ActionTree} from 'vuex'
import { Mutations, MutationType } from './mutations'
import {State} from './state'

export enum ActionTypes {
    GetToDoItems = 'GET_ITEMS',

}

type ActionAguments = Omit<ActionContext<State,State>, 'commit'> & {
    commit<K extends keyof Mutations> (
        key:K,
        playload:Parameters<Mutations[K]>[1]
    ):ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionTypes.GetToDoItems](context:ActionAguments):void
}

const sleep = (ms:number) => new Promise(resolve=>setTimeout(resolve,ms))

export const actions:ActionTree<State,State> & Actions = {
  async [ActionTypes.GetToDoItems]({commit}) {
        commit(MutationType.SetLoading, true);

        await sleep(1000);
        commit(MutationType.SetLoading, false);

        commit(MutationType.SetItem,[
            {
                id:1,
                text:'Create Awesome Vue 3',
                completed:false
            }
        ])

    }
}