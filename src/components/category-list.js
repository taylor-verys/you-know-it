import React, { Component } from 'react';

export default class CategoryList extends Component {
    render() {
        const { categories } = this.props;

        return (
            <ul>
                { categories.map((category) => <li key={category.id}>{category.categ_name}</li>) }
            </ul>
        );
    }
}