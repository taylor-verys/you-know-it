import React, { Component } from 'react';

export default class Question extends Component {
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
                    <li>{question.q_options_1}</li>
                    <li>{question.q_options_2}</li>
                    <li>{question.q_options_3}</li>
                    <li>{question.q_options_4}</li>
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
    question: React.PropTypes.object.isRequired
};