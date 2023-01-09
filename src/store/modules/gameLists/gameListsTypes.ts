import type {ActionContext} from "vuex";
import type {RootState} from "@/store/state";

export interface answerType {
    answer: String
    checked: Boolean
}

export interface questionsListType {
    id: String
    question: String
    answers: Array<answerType>
}

export interface gameListType {
    id: String
    title: String
    questions: Array<questionsListType>
}

// STATE TYPE
export interface gameListsType {
    gameLists: Array<gameListType>
}

// GETTERS TYPE
export type Getters<S = gameListsType> = {
    getAllGameLists: (state: S) => Object,
    // getGameListFromId: (state: S, id: string) => Object
}

// ACTIONS TYPE
type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<gameListsType, RootState>, 'commit'>

export interface Actions {
    showVMGameListFromIdodal(
        {commit}: AugmentedActionContext,
        payload: {
            id: string
        }
    ): void,
}

// MUTATIONS TYPE
export type Mutations<S = gameListsType> = {
    // setShowModal(state: S, value: Boolean): void
    // setComponent(state: S, value: Nullable<Component>): void
    // setComponentData(state: S, value: Object): void
}
