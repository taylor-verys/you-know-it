import actionTypes from '../constants/action-types';

export default function question(state = {}, action = {}) {

    const { type, data } = action;

    switch (type) {

        case actionTypes.FETCH_QUESTIONS_SUCCEEDED:
            state = data[0];
            return state;

        default:
            return state;

    }

}
