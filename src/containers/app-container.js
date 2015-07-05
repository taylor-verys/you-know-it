import React from 'react';
import Categories from './categories-container';
import Questions from './questions-container';

export default class App {
    render() {
        return (
            <div>
                <header>You Know It</header>
                <Categories />
                <Questions />
            </div>
        );
    }
}