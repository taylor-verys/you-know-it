import actionTypes from '../constants/action-types';

const initialState = {
    answered: false,
    correct: false
};

export default function answer(state = initialState, action = {}) {

    const { type, data } = action;

    switch (type) {

        case actionTypes.ANSWER_SELECTED:
            return {
                answered: true,
                correct: data.selectedAnswer === data.correctAnswer
            };

        case actionTypes.NEW_QUESTION_REQUESTED:
            return {
                answered: false,
                correct: false
            };

        default:
            return state;

    }

}