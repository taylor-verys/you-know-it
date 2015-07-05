import React, { Component } from 'react';

export default class Answer extends Component {

    render() {
        const { isShown, isCorrect } = this.props;

        return (
            <div style={ isShown ? {display: 'inline-block'} : {display: 'none'} }>
                { isCorrect ? 'Correct' : 'Incorrect' }
            </div>
        );
    }

}

Answer.propTypes = {
    isShown: React.PropTypes.bool,
    isCorrect: React.PropTypes.bool
};