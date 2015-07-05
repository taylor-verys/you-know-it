import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import CategoryList from '../components/category-list';
import * as actions from '../actions/actions';

@connect(state => ({
    categories: state.categoriesReducer
}))
export default class Categories {
    render() {
        const { categories, dispatch } = this.props;

        return (
            <CategoryList categories={categories} {...bindActionCreators(actions, dispatch)} />
        )
    }
}