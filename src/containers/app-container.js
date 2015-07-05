import React from 'react';
import { CategoriesContainer, QuestionsContainer } from '../containers';

export default class App {
    render() {
        return (
            <div>
                <header>You Know It</header>
                <CategoriesContainer />
                <QuestionsContainer />
            </div>
        );
    }
}