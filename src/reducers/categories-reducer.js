import actionTypes from '../constants/action-types';

const initialState = [
    {id: 0, categ_name: 'Default Category'}
];

export default function categories(state = initialState, action = {}) {

    const { type, data } = action;

    switch (type) {

        case actionTypes.FETCH_CATEGORIES_SUCCEEDED:
            state = data;
            return state;

        default:
            return state;

    }

}