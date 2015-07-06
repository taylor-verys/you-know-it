import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
    base: {
        width: '25%',
        height: 'calc(100vh - 58px)',
        minWidth: '200px',
        left: 0,
        bottom: 0,
        overflow: 'auto',
        float: 'left',
        boxSizing: 'border-box',
        margin: 0
    }
};

@Radium
export default class CategoryList extends Component {

    handleCategoryClick(category) {
        const { categorySelected } = this.props;

        categorySelected(category);
    }

    render() {
        const { categories } = this.props;

        return (
            <ul style={[styles.base]}>
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