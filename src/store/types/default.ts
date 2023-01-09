export type Nullable<T> = T | null;

export type StateType<S, G, A, M> = {
    namespaced: Boolean | undefined,
    state: S,
    getters: G,
    actions: A,
    mutations: M
}
