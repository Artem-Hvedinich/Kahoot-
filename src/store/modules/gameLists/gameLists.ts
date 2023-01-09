import type {gameListsType} from "./gameListsTypes";
import type {GetterTree, Module} from "vuex";
import type {RootState} from "@/store/state";
import type {Getters} from "./gameListsTypes";

// STATE
const state: gameListsType = {
    gameLists: [
        {
            id: 'asdd-asdas-2d',
            title: 'PitStop 24',
            questions: [
                {
                    id: 'kbas-asdas-3d',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'sddd-sdfhv-5f',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
            ]
        },
        {
            id: 'gfds-hjkmn-6c',
            title: 'new list',
            questions: [
                {
                    id: 'kecl-porc-9x',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'adcm-uioac-7c',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'adcm-uioac-7c',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'kecl-porc-9x',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'adcm-uioac-7c',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'adcm-uioac-7c',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'kecl-porc-9x',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'adcm-uioac-7c',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'adcm-uioac-7c',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'kecl-porc-9x',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
                {
                    id: 'adcm-uioac-7c',
                    question: 'Как звали тебя когда, ты был молодой?',
                    answers: [
                        {answer: 'Катя', checked: true},
                        {answer: 'Артем', checked: false},
                        {answer: 'Никита', checked: false},
                        {answer: 'Макс', checked: false}
                    ]
                },
            ]
        },
    ]
}

// GETTERS
const getters: GetterTree<gameListsType, RootState> & Getters = {
    getAllGameLists: (state: gameListsType) => state.gameLists,
    getGameListFromId: (state: gameListsType) => (id: string) =>
        state.gameLists.filter(f => f.id === id),
}

// ACTIONS
const actions = {}

// MUTATIONS
const mutations = {}

export const gameLists: Module<gameListsType, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}