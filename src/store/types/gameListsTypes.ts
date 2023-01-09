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

export interface gameListsType {
    gameLists: Array<gameListType>
}
