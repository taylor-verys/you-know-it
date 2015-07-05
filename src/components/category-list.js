import React, { Component } from 'react';

export default class CategoryList extends Component {
    render() {
        return (
            <button onClick={this.props.requestedCategories}>{this.props.categories}</button>
        );
    }
}