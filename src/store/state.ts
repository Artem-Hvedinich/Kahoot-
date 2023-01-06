import type {questionType} from "@/store/modules/question";
import question from "@/store/modules/question";
import {createStore} from 'vuex'

export interface State {
    question: questionType
}

const state = createStore<State>({
    modules: {
        question
    }
})

export default state;