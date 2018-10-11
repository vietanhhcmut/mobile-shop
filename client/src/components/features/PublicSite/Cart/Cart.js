import React, { Component } from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { calcDiscountPrice, formatPrice } from '../../../../constants/constants';

class Cart extends Component {
    state = {
        cart: [
            {
                id: '123',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/33-small_default/printed-dress.jpg',
                name: 'Samsung Galaxy Tab',
                price: 16998000,
                saleoff: 5,
                quantity: 1,
                color: 'Black'
            },
            {
                id: '456',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/24-small_default/printed-chiffon-dress.jpg',
                name: 'Sony Xperia XZs',
                price: 7569000,
                saleoff: 3,
                quantity: 3,
                color: 'White'
            },
            {
                id: '789',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/43-small_default/printed-dress.jpg',
                name: 'OPPO F3 Plus',
                price: 9890000,
                saleoff: 10,
                quantity: 2,
                color: 'Gold'
            }
        ]
    }
    render() {
        const { cart } = this.state;
        return (
            <div className='cart'>
                <div className='cart__left-side'>
                    <div className='left-side__order-wrapper'>
                        <div className='order-wrapper__title'>GIỎ HÀNG</div>
                        <div>
                            {cart.map((product, index) =>
                                <CartItem
                                    key={product.id}
                                    img={product.img}
                                    name={product.name}
                                    price={product.price}
                                    saleoff={product.saleoff}
                                    quantity={product.quantity}
                                    color={product.color} />
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
                                    <b>{cart.reduce((sum, product) => sum + product.quantity, 0)}</b> Sản phẩm
                                </span>
                                <b>
                                    {formatPrice(cart.reduce((sum, product) =>
                                        sum + calcDiscountPrice(product.price, product.saleoff) * product.quantity, 0))}
                                </b>
                            </div>
                            <div className='total-checkout__row'>
                                <span>Phí giao hàng</span>
                                <b>Free</b>
                            </div>
                        </div>
                        <div className='order-summary__total-checkout'>
                            <div className='total-checkout__row'>
                                <span>Total</span>
                                <b className='row__total-price'>
                                    {formatPrice(cart.reduce((sum, product) =>
                                        sum + calcDiscountPrice(product.price, product.saleoff) * product.quantity, 0))}
                                </b>
                            </div>
                        </div>
                        <div className='order-summary__total-checkout'>
                            <Link to='/checkout' className='total-checkout__checkout-button'>Thanh toán</Link>
                        </div>

                    </div>
                    <div className='order-summary__policy'>
                        <p className='policy__row'>
                            <i className="material-icons">security</i>
                            <span>Security pocicy</span>
                        </p>
                        <p className='policy__row'>
                            <i className="material-icons">local_shipping</i>
                            <span>Delivery pocicy</span>
                        </p>
                        <p className='policy__row'>
                            <i className="material-icons">compare_arrows</i>
                            <span>Return pocicy</span>
                        </p>
                        <p>The order will only be confirmed when you click on the button 'Order with an obligation to pay' at the end of the checkout!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;