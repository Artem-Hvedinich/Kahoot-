import {createStore} from 'vuex'
import type {Module} from 'vuex'
import question from "@/store/modules/question";
import type {questionType} from "@/store/modules/question";
import gameLists from "@/store/modules/gameLists";
import type {gameListsType} from "@/store/types/gameListsTypes";
import {modal} from "@/store/modules/modal/modal";
import type {modalType} from "@/store/modules/modal/modalTypes";

export interface RootState {
    question: questionType
    gameList: gameListsType
    modal: Module<modalType, RootState>
}

const state = createStore<RootState>({
    modules: {
        question,
        gameLists,
        modal
    }
})

export default state;