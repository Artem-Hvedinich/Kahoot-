import type {Nullable} from "@/store/types/default";
import type {Component} from "vue";
import type {ActionContext} from "vuex";
import type {RootState} from "@/store/state";

// STATE TYPE
export interface modalType {
    isShowVModal: Boolean,
    component: Nullable<Component>,
    data: Object,
}

// GETTERS TYPE
export type Getters<S = modalType> = {
    isShowVModal(state: S): Boolean
    getComponent(state: S): Nullable<Component>
    getComponentData(state: S): Object
}

// ACTIONS TYPE
type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<modalType, RootState>, 'commit'>

export interface Actions {
    showVModal(
        {commit}: AugmentedActionContext,
        payload: {
            component: Nullable<Component>,
            data: Object
        }
    ): void,

    closeVModal(
        {commit}: AugmentedActionContext,
    ): void
}

// MUTATIONS TYPE
export type Mutations<S = modalType> = {
    setShowModal(state: S, value: Boolean): void
    setComponent(state: S, value: Nullable<Component>): void
    setComponentData(state: S, value: Object): void
}