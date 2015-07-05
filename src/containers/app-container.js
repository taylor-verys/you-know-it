import React from 'react';
import { CategoriesContainer, QuestionsContainer } from '../containers';

export default class App {
    render() {
        return (
            <main>
                <header>You Know It</header>
                <CategoriesContainer />
                <QuestionsContainer />
            </main>
        );
    }
}