import React, { Component } from 'react';
import './ProductItem.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { formatPrice, calcDiscountPrice } from '../../../constants/constants';
import Context from '../../../Context';

class ProductItem extends Component {
    static contextType = Context;
    state = {
        showingImg: this.props.item.imgs[0],
        preview: false
    }
    handleChangeImg = img => () => {
        this.setState({ showingImg: img });
    }
    handleAddToCart = (id, quantity, color) => () => {
        const boundingImg = this.productImg.getBoundingClientRect();
        this.context.handleAddToCart(id, quantity, color, boundingImg, this.state.showingImg);
    }
    render() {
        const { item } = this.props;
        const imgs = this.props.item.imgs.map((img, index) => (
            <img src={img} alt="item" onClick={this.handleChangeImg(img)} key={index+img} />
        ));
        return (
            <div className={`product-item${this.props.isFirst? ' active': ''}`}>
                <div className="product-item__main-content">
                    <img src={this.state.showingImg} alt="item" ref={img => this.productImg = img} />
                    <Link to={`/item/${item.id}`}><h5 className="item-title">{item.name}</h5></Link>
                    <span className="item-quick-view" onClick={this.props.handleTogglePreviewItem}>
                        <i className="material-icons">
                            zoom_out_map
                        </i>
                    </span>
                    <div className="item-price">
                        {formatPrice(calcDiscountPrice(item.price, item.saleoff))}
                        {
                            item.saleoff?
                            <div className="item-saleoff">
                                <span>{formatPrice(item.price)}</span>
                                <span>-{item.saleoff}</span>
                            </div>
                            :
                            null
                        }
                    </div>
                    <Button variant="outlined" color="secondary" className="item-adding-cart"
                        onClick={this.handleAddToCart(item.id, 1, item.colors.length===0 ? 'Đen' : item.colors[0].name)}>
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