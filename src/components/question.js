import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
    base: {
        padding: '5px 2px'
    },

    choice: {
        cursor: 'pointer',
        ':hover': {
            background: '#ccc'
        }
    }
};

@Radium
export default class Question extends Component {

    handleAnswerClick(answerId) {
        const { question, answerSelected } = this.props;

        answerSelected({
            selectedAnswer: answerId,
            correctAnswer: question.q_correct_option
        });
    }

    renderNoQuestionMessage() {
        return (
            <div>Select a Category</div>
        );
    }

    renderQuestion() {
        const { question } = this.props;

        return (
            <section style={[styles.base]}>
                <header>{question.q_text}</header>
                <ol>
                    <li ref="choiceOne" style={[styles.choice]} onClick={this.handleAnswerClick.bind(this, 1)}>{question.q_options_1}</li>
                    <li ref="choiceTwo" style={[styles.choice]} onClick={this.handleAnswerClick.bind(this, 2)}>{question.q_options_2}</li>
                    <li ref="choiceThree" style={[styles.choice]} onClick={this.handleAnswerClick.bind(this, 3)}>{question.q_options_3}</li>
                    <li ref="choiceFour" style={[styles.choice]} onClick={this.handleAnswerClick.bind(this, 4)}>{question.q_options_4}</li>
                </ol>
            </section>
        );
    }

    render() {
        const { question } = this.props;

        return (
            <div>
                { Object.keys(question).length ? this.renderQuestion() : this.renderNoQuestionMessage() }
            </div>
        );
    }
}

Question.propTypes = {
    question: React.PropTypes.object.isRequired,
    answerSelected: React.PropTypes.func.isRequired
};
