import React, { Component } from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { formatPrice, calcTotalQuantity } from '../../../../constants/constants';
import Context from '../../../../Context';

class Cart extends Component {
    static contextType = Context;
    render() {
        const { cart, totalPrice } = this.context;
        return (
            <div className='cart'>
                <div className='cart__left-side'>
                    <div className='left-side__order-wrapper'>
                        <div className='order-wrapper__title'>GIỎ HÀNG</div>
                        {(!cart || cart.length === 0) &&
                            <div className='order__item'>Không có sản phẩm nào trong giỏ hàng của bạn. Quay lại mua nào!</div>
                        }
                        <div>
                            {cart.map((cartItem, index) =>
                                <CartItem
                                    key={cartItem.productId + cartItem.color}
                                    index={index}
                                    productId={cartItem.productId}
                                    quantity={cartItem.quantity}
                                    color={cartItem.color} />
                            )}
                        </div>
                    </div>
                    <Link to='/' className='left-side__continue-shopping'>
                        <i className="material-icons">keyboard_arrow_left</i>
                        <span>Tiếp tục mua hàng</span>
                    </Link>
                </div>
                <div className='cart__right-side'>
                    <div className='right-side__order-summary'>
                        <div className='order-summary__total-checkout'>
                            <div className='total-checkout__row'>
                                <span>
                                    <b>{calcTotalQuantity(cart)}</b> Sản phẩm
                                </span>
                                <b>
                                    {formatPrice(totalPrice)}
                                </b>
                            </div>
                            <div className='total-checkout__row'>
                                <span>Phí giao hàng</span>
                                <b>Miễn phí</b>
                            </div>
                        </div>
                        <div className='order-summary__total-checkout'>
                            <div className='total-checkout__row'>
                                <span>Tổng cộng</span>
                                <b className='row__total-price'>
                                    {formatPrice(totalPrice)}
                                </b>
                            </div>
                        </div>
                        <div className='order-summary__total-checkout'>
                            <Link to='/checkout'
                                className='total-checkout__checkout-button'>THANH TOÁN</Link>
                        </div>

                    </div>
                    <div className='order-summary__policy'>
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
            </div>
        );
    }
}

export default Cart;