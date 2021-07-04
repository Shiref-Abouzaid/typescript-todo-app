import {
  createStore,
  createLogger,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions
} from 'vuex'
import {State, state} from './state';
import { Mutations, mutations } from './mutations';
import {Actions, actions} from './actions';
import {Getters, getters} from './getters'
export default createStore({
  plugins:process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  mutations,
  actions,
  getters
})

export type Store = Omit<VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]> (
    key:K,
    playload:P,
    options?:CommitOptions
  ):ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions, P extends Parameters<Actions[K]>[1]> (
    key:K,
    playload:P,
    options?:DispatchOptions
  ):ReturnType<Actions[K]>
} & { 
  getters: {
    [K in keyof Getters]:ReturnType<Getters[K]>
  }
}