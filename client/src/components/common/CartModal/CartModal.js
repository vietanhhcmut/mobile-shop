import React, { Component } from 'react';
import './CartModal.css';
import CartItem from './CartItem/CartItem';
import { formatPrice } from './../../../constants/constants';
import { Link } from 'react-router-dom';

class CartModal extends Component {
    state = {
        showCart: false,
        cart: [
            {
                id: '123',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/33-small_default/printed-dress.jpg',
                name: 'Samsung Galaxy Tab',
                price: 16998000,
                saleoff: 5,
                quantity: 1
            },
            {
                id: '456',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/24-small_default/printed-chiffon-dress.jpg',
                name: 'Sony Xperia XZs',
                price: 7569000,
                saleoff: 3,
                quantity: 3
            },
            {
                id: '789',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/43-small_default/printed-dress.jpg',
                name: 'OPPO F3 Plus',
                price: 9890000,
                saleoff: 10,
                quantity: 2
            }
        ]
    }
    handleClickCartIcon = () => {
        this.setState({ showCart: true });
    }
    handleClickBackdrop = () => {
        this.setState({ showCart: false });
    }
    render() {
        const { showCart, cart } = this.state;
        const styleCartContent = {
            transform: showCart ? 'translateY(0)' : 'translateY(calc(100% + 10px))'
        }
        return (
            <div className='cart-modal'>
                <div className='cart-modal__icon-wrapper' onClick={this.handleClickCartIcon}>
                    <i className="material-icons icon-wrapper__cart-icon">shopping_cart</i>
                    <div className='icon-wrapper__product-quantity'>
                        3
                    </div>
                    <div className='icon-wrapper__animation'>
                    </div>
                </div>
                <div className='cart-modal__cart-content' style={styleCartContent}>
                    <div className='cart-content__products'>
                        {cart.map((product, index) =>
                            <CartItem
                                key={product.id}
                                img={product.img}
                                name={product.name}
                                price={product.price}
                                saleoff={product.saleoff}
                                quantity={product.quantity} />
                        )}
                    </div>
                    <div className='cart-content__total-price'>
                        <div className='total-price__row'>
                            <span>Tổng giá</span>
                            <b>{formatPrice(121456000)}</b>
                        </div>
                        <div className='total-price__row'>
                            <span>Shipping</span>
                            <b>Free</b>
                        </div>
                        <div className='total-price__row total-price__total'>
                            <span>Tổng tiền</span>
                            <b>{formatPrice(121456000)}</b>
                        </div>
                        <div className='total-price__view-cart'>
                            <Link className='view-cart__button' to='/cart'>GIỎ HÀNG</Link>
                            <Link className='view-cart__button' to='/checkout'>THANH TOÁN</Link>
                        </div>
                    </div>
                </div>
                <div className={showCart ? 'cart-modal__backdrop' : ''}
                    onClick={this.handleClickBackdrop}>
                </div>
            </div>
        );
    }
}

export default CartModal;