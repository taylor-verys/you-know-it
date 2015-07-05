import React, { Component } from 'react';

export default class CategoryList extends Component {
    render() {
        return (
            <div>{this.props.categories}</div>
        );
    }
}