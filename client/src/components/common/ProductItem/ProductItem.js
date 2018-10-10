import React, { Component } from 'react';
import './ProductItem.css';
import { Button } from '@material-ui/core';

class ProductItem extends Component {
    state = {
        showingImg: this.props.item.imgs[0]
    }
    handleChangeImg = img => () => {
        this.setState({ showingImg: img });
    }
    render() {
        const { item } = this.props;
        const price = item.price - item.price * item.saleoff / 100;
        const imgs = this.props.item.imgs.map(img => (
            <img src={img} alt="item" onClick={this.handleChangeImg(img)}/>
        ));
        return (
            <div className={`product-item${this.props.isFirst? ' active': ''}`}>
                <div className="product-item__main-content">
                    <img src={this.state.showingImg} alt="item"/>
                    <h5 className="item-title">{item.name}</h5>
                    <span className="item-quick-view">
                        <i class="material-icons">
                            zoom_out_map
                        </i>
                    </span>
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
                    {imgs}
                </div>
            </div>
        );
    }
}

export default ProductItem;