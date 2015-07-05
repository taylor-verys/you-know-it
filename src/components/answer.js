import React, { Component } from 'react';

export default class Answer extends Component {

    handleNewQuestionClick(categoryId) {
        const { newQuestionRequested } = this.props;

        newQuestionRequested({categoryId});
    }

    render() {
        const { isShown, isCorrect, question: { categ_id: categoryId } } = this.props;

        return (
            <div style={ isShown ? {display: 'inline-block'} : {display: 'none'} }>
                { isCorrect ? 'Correct' : 'Incorrect' }
                <button onClick={this.handleNewQuestionClick.bind(this, categoryId)}>New Question</button>
            </div>
        );
    }

}

Answer.propTypes = {
    isShown: React.PropTypes.bool,
    isCorrect: React.PropTypes.bool,
    newQuestionRequested: React.PropTypes.func
};