import React, { Component } from 'react';

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
            <section>
                <header>{question.q_text}</header>
                <ol>
                    <li onClick={this.handleAnswerClick.bind(this, 1)}>{question.q_options_1}</li>
                    <li onClick={this.handleAnswerClick.bind(this, 2)}>{question.q_options_2}</li>
                    <li onClick={this.handleAnswerClick.bind(this, 3)}>{question.q_options_3}</li>
                    <li onClick={this.handleAnswerClick.bind(this, 4)}>{question.q_options_4}</li>
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