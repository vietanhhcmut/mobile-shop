import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
    render() {
        return (
            <div className='cart-modal__cart-item'>
                <a href="#" className='cart-item__product-img'>
                    <img src="https://demo4leotheme.com/prestashop/leo_mobile/33-small_default/printed-dress.jpg" alt="mobile" />
                </a>
                <div className='cart-item__info'>
                    <a href="">Samsung Galaxy S8</a>
                    <span>18.000.000 VNĐ</span>
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