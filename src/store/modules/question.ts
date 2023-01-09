export interface questionType {
    questionItems: {
        question: String,
        answers: Array<Object>
    }
}

export default {
    // STATE
    state: {
        questionItems: {
            question: 'Как звали тебя когда, ты был молодой?',
            answers: [
                {answer: 'Катя', checked: true},
                {answer: 'Артем', checked: false},
                {answer: 'Никита', checked: false},
                {answer: 'Макс', checked: false}
            ]
        }
    },
    // GETTERS
    getters: {
        getQuestionItems: (state: questionType) => state.questionItems,
    },

    // ACTIONS
    actions: {},

    // MUTATIONS
    mutations: {},
    namespaced: true as true,
}
