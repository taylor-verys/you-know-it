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
        boxSizing: 'border-box',
        margin: 0,
        listStyle: 'none',
        display: 'inline-block'
    },

    category: {
        padding: '5px 2px',
        cursor: 'pointer',
        ':hover': {
            background: '#ccc'
        }
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
                    <li
                        key={category.id}
                        onClick={this.handleCategoryClick.bind(this, category)}
                        style={[styles.category]}
                    >
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
