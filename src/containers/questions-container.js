import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Question from '../components/question';
import * as actions from '../actions/actions';

@connect(state => ({
    question: state.questionReducer
}))
export default class Categories extends Component {

    render() {
        const { question, dispatch } = this.props;

        return (
            <Question question={question} {...bindActionCreators(actions, dispatch)} />
        )
    }
}