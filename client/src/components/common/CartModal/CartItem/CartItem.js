import React, { Component } from 'react';
import './CartItem.css';
import { calcDiscountPrice, formatPrice } from '../../../../constants/constants';
import { Link } from 'react-router-dom';

class CartItem extends Component {
    render() {
        const { img, name, price, saleoff, quantity } = this.props;
        return (
            <div className='products__cart-item'>
                <Link to='/' className='cart-item__product-img'>
                    <img src={img} alt="mobile" />
                </Link>
                <div className='cart-item__info'>
                    <Link to='/' className='info__product-name'>{name}</Link>
                    <span className='info__discount-price'>{formatPrice(calcDiscountPrice(price, saleoff))}</span>
                    <div>
                        <span className='info__original-price'>{formatPrice(price)}</span> 
                        <i className='info__saleoff'>-{saleoff}%</i>
                    </div>
                    <div className='info__quantity-adjusting'>
                        <span href="#">-</span>
                        <b className='quantity-adjusting__product-quantity'>{quantity}</b>
                        <span href="#">+</span>
                    </div>
                </div>
                <i className="material-icons cart-item__remove-product">clear</i>
            </div>
        );
    }
}

export default CartItem;