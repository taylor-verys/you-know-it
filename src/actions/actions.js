import request from '../_config/superagent';
import actionTypes from '../constants/action-types';

export function categoriesListLoaded() {
    return dispatch => {
        dispatch({
           type: actionTypes.CATEGORIES_LIST_LOADED
        });

        return request.get('https://pareshchouhan-trivia-v1.p.mashape.com/v1/getCategoryList')
            .end(function (err, res) {
                const { body } = res;

                err ? dispatch(fetchCategoriesFailed(body)) : dispatch(fetchCategoriesSucceeded(body));
            });
    }
}

export function fetchCategoriesFailed(data) {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAILED,
        data
    }
}

export function fetchCategoriesSucceeded(data) {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCEEDED,
        data
    }
}