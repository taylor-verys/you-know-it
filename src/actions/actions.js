import request from '../_config/superagent';
import actionTypes from '../constants/action-types';

function fetchQuestion(err, res={}, dispatch) {
    const { body } = res;
    const invalidResponse = err || !body.length;

    invalidResponse
        ? dispatch(fetchQuestionsFailed(body))
        : dispatch(fetchQuestionsSucceeded(body));
}

export function categoriesListLoaded(data) {
    return dispatch => {
        dispatch({
            type: actionTypes.CATEGORIES_LIST_LOADED,
            data
        });

        return request.get('https://pareshchouhan-trivia-v1.p.mashape.com/v1/getCategoryList')
            .end(function (err, res = {}) {
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

export function categorySelected(data = {}) {
    const { id: categoryId } = data;

    return dispatch => {
        dispatch({
            type: actionTypes.CATEGORY_SELECTED,
            data
        });

        return request.get(`https://pareshchouhan-trivia-v1.p.mashape.com/v1/getQuizQuestionsByCategory?categoryId=${categoryId}&limit=1&page=1`)
            .end((err, res) => fetchQuestion(err, res, dispatch));
    }
}

export function fetchQuestionsSucceeded(data) {
    return {
        type: actionTypes.FETCH_QUESTIONS_SUCCEEDED,
        data
    }
}

export function fetchQuestionsFailed(data) {
    return {
        type: actionTypes.FETCH_QUESTIONS_FAILED,
        data
    }
}

export function answerSelected(data) {
    return {
        type: actionTypes.ANSWER_SELECTED,
        data
    }
}

export function newQuestionRequested(data) {
    const { categoryId } = data;

    return dispatch => {
        dispatch({
            type: actionTypes.NEW_QUESTION_REQUESTED,
            data
        });

        return request.get(`https://pareshchouhan-trivia-v1.p.mashape.com/v1/getQuizQuestionsByCategory?categoryId=${categoryId}&limit=1&page=1`)
            .end((err, res) => fetchQuestion(err, res, dispatch));
    }
}
