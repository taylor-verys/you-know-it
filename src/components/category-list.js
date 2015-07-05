import React, { Component } from 'react';

export default class CategoryList extends Component {

    handleCategoryClick(category) {
        const { categorySelected } = this.props;

        categorySelected(category);
    }

    render() {
        const { categories } = this.props;

        return (
            <ul>
                { categories.map((category) => (
                    <li key={category.id} onClick={this.handleCategoryClick.bind(this, category)}>
                        {category.categ_name}
                    </li>
                ))}
            </ul>
        );
    }

}

CategoryList.propTypes = {
    categories: React.PropTypes.array.isRequired,
    categorySelected: React.PropTypes.func.isRequired
};