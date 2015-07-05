const initialState = [
    'one',
    'two',
    'three'
];

export default function categories(state = initialState, action = {}) {

    const { type, data } = action;

    switch (type) {

        default:
            return state;

    }

}