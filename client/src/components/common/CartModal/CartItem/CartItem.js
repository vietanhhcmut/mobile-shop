import React, { Component } from 'react';
import './CartItem.css';
import { calcDiscountPrice, formatPrice } from '../../../../constants/constants';

class CartItem extends Component {
    render() {
        const { img, name, price, saleoff } = this.props;
        return (
            <div className='products__cart-item'>
                <a href='a' className='cart-item__product-img'>
                    <img src={img} alt="mobile" />
                </a>
                <div className='cart-item__info'>
                    <a href="a" className='info__product-name'>{name}</a>
                    <span className='info__discount-price'>{formatPrice(calcDiscountPrice(price, saleoff))}</span>
                    <div>
                        <span className='info__original-price'>{formatPrice(price)}</span> 
                        <i className='info__saleoff'>-{saleoff}%</i>
                    </div>
                    <div className='info__quantity-adjusting'>
                        <span href="#">-</span>
                        <b className='quantity-adjusting__product-quantity'>3</b>
                        <span href="#">+</span>
                    </div>
                </div>
                <i class="material-icons cart-item__remove-product">clear</i>
            </div>
        );
    }
}

export default CartItem;