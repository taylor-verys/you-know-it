import React from 'react';
import Radium from 'radium';
import { CategoriesContainer, QuestionsContainer } from '../containers';

const styles = {
    base: {
        width: '50%',
        minWidth: '980px',
        margin: 'auto',
    },

    header: {
        width: '100%',
        height: '50px',
        lineHeight: '50px',
        padding: '0 15px',
        background: '#eee',
    },

    content: {
        padding: '15px 0',
    },
};

@Radium
export default class App {
    render() {
        return (
            <main style={[styles.base]}>
                <header style={[styles.header]}>You Know It</header>

                <section style={[styles.content]}>
                    <CategoriesContainer />
                    <QuestionsContainer />
                </section>
            </main>
        );
    }
}
