import React, { Component } from 'react';
import './CartItem.css';
import { calcDiscountPrice, formatPrice } from '../../../../../constants/constants';
import { Link } from 'react-router-dom';

class CartItem extends Component {
    render() {
        const { img, name, price, saleoff, quantity, color, 
            handleChangeQuantity, handleClickIncreaseQuantity, handleClickDecreaseQuantity, handleBlurQuantity } = this.props;
        const discountPrice = calcDiscountPrice(price, saleoff);
        return (
            <div className='order__item'>
                <Link to='/' className='item__product-img'>
                    <img src={img} alt="mobile" />
                </Link>
                <div className='item__info-wrapper'>
                    <div className='info-wrapper__product-info'>
                        <Link to='/' className='product-info__name'>{name}</Link>
                        <span className='product-info__discount-price'>{formatPrice(discountPrice)}</span>
                        <div>
                            <span className='product-info__original-price'>{formatPrice(price)}</span>
                            <span className='product-info__saleoff'>-{saleoff}%</span>
                            <p className='product-info__color'>
                                <b>Color: </b>
                                <span>{color}</span>
                            </p>
                        </div>
                    </div>
                    <div className='info-wrapper__quantity-total'>
                        <div className='quantity-total__product-quantity'>
                            <input className='product-quantity__quantity' 
                                value={quantity} type="text" 
                                onChange={handleChangeQuantity}
                                onBlur={handleBlurQuantity(quantity)}  />
                            <div className='product-quantity__arrows'>
                                <div className="material-icons arrows__arrow-up"
                                    onClick={handleClickIncreaseQuantity}>keyboard_arrow_up</div>
                                <div className="material-icons arrows__arrow-down" 
                                    onClick={handleClickDecreaseQuantity}>keyboard_arrow_down</div>
                            </div>
                        </div>
                        <div className='quantity-total__total-price'>
                            {formatPrice(discountPrice * quantity)}
                        </div>
                    </div>
                    <i className="material-icons item__remove-product">delete</i>
                </div>
            </div>
        );
    }
}

export default CartItem;