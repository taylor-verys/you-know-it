import actionTypes from '../constants/action-types';

const initialState = {
    "id": 19851,
    "q_text": "Which constitutional amendment makes education a fundamental right for all childrenbetween 6 and 14 under Article 21A",
    "q_options_1": "73 rd  ",
    "q_options_2": "83 rd   ",
    "q_options_3": " 93 rd   ",
    "q_options_4": "63 rd",
    "q_correct_option": 3,
    "q_date_added": "2013-07-24T04:00:00.000Z",
    "categ_id": 3
};

export default function question(state = initialState, action = {}) {

    const { type, data } = action;

    switch (type) {

        default:
            return state;

    }

}