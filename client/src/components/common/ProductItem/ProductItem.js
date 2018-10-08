import React, { Component } from 'react';
import './ProductItem.css';

class ProductItem extends Component {
    render() {
        return (
            <div className="product-item">
                {this.props.item.id}
            </div>
        );
    }
}

export default ProductItem;