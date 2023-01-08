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
    actions: {
        addPresentProduct(state: any, payload: { presentProduct: Object }) {
            if (payload.presentProduct && Object.keys(payload.presentProduct).length > 0) {
                state.commit('setPresentProduct', {
                    size_id: state.presentProduct.size_id,
                    height_id: state.presentProduct.height_id,
                    product_id: state.presentProduct.product_id
                })
                state.commit('setFullName', state.presentProduct.fullName)
            } else {
                state.commit('setFullName', '')
                state.commit('setPresentProduct', {})
            }
        }
    },

// MUTATIONS
    mutations: {
        setPresentProduct(state: any, payload: { presentProduct: Object }) {
            state.presentProduct = payload.presentProduct
        },
        setFullName(state: any, payload: { fullName: String }) {
            state.fullName = payload.fullName
        }
    },
    namespaced: true as true,
}
