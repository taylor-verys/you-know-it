const initialState = [];

export default function categories(state = initialState, action = {}) {

    const { type, data } = action;

    switch (type) {

        case 'FETCH_CATEGORIES_SUCCEEDED':
            state = data;
            return state;

        default:
            return state;

    }

}