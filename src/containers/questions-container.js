import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Question from '../components/question';
import Answer from '../components/answer';
import * as actions from '../actions/actions';

@connect(state => ({
    question: state.questionReducer,
    answer: state.answerReducer
}))
export default class Questions extends Component {

    render() {
        const { question, answer, dispatch } = this.props;

        return (
            <section>
                <Question question={question} {...bindActionCreators(actions, dispatch)} />
                <Answer question={question} isShown={answer.answered} isCorrect={answer.correct} {...bindActionCreators(actions, dispatch)} />
            </section>
        )
    }
}