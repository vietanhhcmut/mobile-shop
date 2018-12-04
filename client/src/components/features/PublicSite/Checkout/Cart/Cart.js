import React, { Component } from 'react';
import './Cart.css';
import { formatPrice } from './../../../../../constants/constants';
import Context from '../../../../../Context';
import CartItem from './CartItem/CartItem';

class Cart extends Component {
    static contextType = Context;
    state = {
        showCart: false,
    }
    handleClickDetailsButton = () => {
        this.setState(prevState => {
            return { showCart: !prevState.showCart };
        })
    }
    render() {
        const { cart, totalPrice } = this.context;
        const { showCart } = this.state;
        return (
            <div className='checkout__checkout-cart'>
                <div className='checkout-cart__title'>
                    Giỏ hàng của bạn
                </div>
                <div className='checkout-cart__content'>
                    <button className='content__details-button' onClick={this.handleClickDetailsButton}>
                        Xem chi tiết
                    </button>
                    {showCart &&
                        <div className='content__products'>
                            {cart.map((cartItem) =>
                                <CartItem 
                                    key={cartItem.productId + cartItem.color}
                                    productId={cartItem.productId}
                                    quantity={cartItem.quantity}
                                    color={cartItem.color} />
                            )}
                        </div>
                    }
                    <div className='content__row'>
                        <span><b>{cart.reduce((sum, product) => sum + Number(product.quantity), 0)}</b> Sản phẩm</span>
                        <span>
                            {formatPrice(totalPrice)}
                        </span>
                    </div>
                    <div className='content__row'>
                        <span>Phí giao hàng</span>
                        <b>Free</b>
                    </div>
                </div>
                <div className='checkout-cart__total'>
                    <span>Tổng cộng</span>
                    <b>
                        {formatPrice(totalPrice)}
                    </b>
                </div>
                <div className='checkout-cart__policy'>
                    <p className='policy__row'>
                        <i className="material-icons">security</i>
                        <span>Chính sách an toàn</span>
                    </p>
                    <p className='policy__row'>
                        <i className="material-icons">local_shipping</i>
                        <span>Chính sách giao hàng</span>
                    </p>
                    <p className='policy__row'>
                        <i className="material-icons">compare_arrows</i>
                        <span>Chính sách đổi trả</span>
                    </p>
                    <p>The order will only be confirmed when you click on the button 'Order with an obligation to pay' at the end of the checkout!</p>
                </div>
            </div>
        );
    }
}

export default Cart;