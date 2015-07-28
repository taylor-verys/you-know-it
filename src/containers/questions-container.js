import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radium from 'radium';
import Question from '../components/question';
import Answer from '../components/answer';
import * as actions from '../actions/actions';

const styles = {
    base: {
        width: '100%',
        left: 0,
        bottom: 0,
        overflow: 'auto',
        maxWidth: `300px`,
        display: 'inline-block',
        verticalAlign: 'top'
    }
};

@connect(state => ({
    question: state.questionReducer,
    answer: state.answerReducer
}))
@Radium
export default class Questions extends Component {

    render() {
        const { question, answer, dispatch } = this.props;

        return (
            <section style={[styles.base]}>
                <Question question={question} {...bindActionCreators(actions, dispatch)} />
                <Answer question={question} isShown={answer.answered} isCorrect={answer.correct} {...bindActionCreators(actions, dispatch)} />
            </section>
        )
    }
}
