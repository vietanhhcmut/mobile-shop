import React, { Component } from 'react';
import './CartModal.css';
import CartItem from './CartItem/CartItem';
import { formatPrice, calcTotalQuantity } from './../../../constants/constants';
import { Link } from 'react-router-dom';
import Context from '../../../Context';

class CartModal extends Component {
    static contextType = Context;
    state = {
        showCart: false
    }
    handleShowModal = () => {
        this.setState({ showCart: true });
    }
    handleHideModal = () => {
        this.setState({ showCart: false });
    }
    render() {
        const { cart, totalPrice } = this.context;
        const { showCart } = this.state;
        const styleCartContent = {
            transform: showCart ? 'translateY(0)' : 'translateY(300px)'
        }
        return (
            <div className='cart-modal'>
                <div className='cart-modal__icon-wrapper' onClick={this.handleShowModal}>
                    <i className="material-icons icon-wrapper__cart-icon">shopping_cart</i>
                    <div className='icon-wrapper__product-quantity'>
                        {calcTotalQuantity(cart)}
                    </div>
                    <div className='icon-wrapper__animation'></div>
                    {this.context.addToCart ?
                        <div className='icon-wrapper__animation'></div>
                        :
                        null
                    }
                </div>
                <div className='cart-modal__cart-content' style={styleCartContent}>
                    <div className='cart-content__products'>
                        {(!cart || cart.length === 0) &&
                            <i>Không có sản phẩm nào trong giỏ hàng của bạn. Quay lại mua nào!</i>
                        }
                        {cart.map((cartItem, index) =>
                            <CartItem
                                key={cartItem.productId + cartItem.color}
                                index={index}
                                productId={cartItem.productId}
                                quantity={cartItem.quantity}
                                color={cartItem.color} />
                        )}
                    </div>
                    <div className='cart-content__total-price'>
                        <div className='total-price__row'>
                            <span><b>{calcTotalQuantity(cart)}</b> Sản phẩm</span>
                            <span>
                                {formatPrice(totalPrice)}
                            </span>
                        </div>
                        <div className='total-price__row'>
                            <span>Phí giao hàng</span>
                            <span>Miễn phí</span>
                        </div>
                        <div className='total-price__row total-price__total'>
                            <span>Tổng cộng</span>
                            <b>
                                {formatPrice(totalPrice)}
                            </b>
                        </div>
                        <div className='total-price__view-cart'>
                            <Link className='view-cart__button' to='/cart'>GIỎ HÀNG</Link>
                            <Link className='view-cart__button' to='/checkout'>THANH TOÁN</Link>
                        </div>
                    </div>
                </div>
                <div className={showCart ? 'cart-modal__backdrop' : ''}
                    onClick={this.handleHideModal}>
                </div>
            </div>
        );
    }
}

export default CartModal;