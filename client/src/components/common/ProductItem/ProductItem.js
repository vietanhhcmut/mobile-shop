import React, { Component } from 'react';
import './ProductItem.css';
import { Button } from '@material-ui/core';

class ProductItem extends Component {
    render() {
        const { item } = this.props;
        const price = item.price - item.price * item.saleoff / 100;
        return (
            <div className="product-item active">
                <div className="product-item__main-content">
                    <img src={item.imgs[0]} alt="item"/>
                    <h5 className="item-title">{item.name}</h5>
                    <div className="item-price">
                        {price}đ
                        {
                            item.saleoff?
                            <div className="item-saleoff">
                                <span>{item.price}</span>
                                <span>{item.saleoff}</span>
                            </div>
                            :
                            null
                        }
                    </div>
                    <Button variant="outlined" color="secondary" className="item-adding-cart">
                        ADD TO CART
                    </Button>
                </div>
                <div className="product-item__sub-content">
                    <img src={item.imgs[1]} alt="item"/>
                    <img src={item.imgs[2]} alt="item"/>
                </div>
            </div>
        );
    }
}

export default ProductItem;