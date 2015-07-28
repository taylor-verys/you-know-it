import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CategoryList from '../components/category-list';
import * as actions from '../actions/actions';

@connect(state => ({
    categories: state.categoriesReducer
}))
export default class Categories extends Component {

    componentWillMount() {
        const { dispatch } = this.props;

        dispatch(actions.categoriesListLoaded());
    }

    render() {
        const { categories, dispatch } = this.props;

        return (
            <CategoryList categories={categories} {...bindActionCreators(actions, dispatch)} />
        )
    }
}
