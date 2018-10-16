import React, { Component } from 'react';
import './Cart.css';
import { calcDiscountPrice, formatPrice } from './../../../../../constants/constants';
import { Link } from 'react-router-dom';

class Cart extends Component {
    state = {
        showCart: false,
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
    handleClickDetailsButton = () => {
        this.setState(prevState => {
            return { showCart: !prevState.showCart };
        })
    }
    render() {
        const { cart, showCart } = this.state;
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
                            {cart.map((product) =>
                                <div key={product.id} className='products__product'>
                                    <div className='product__img-details'>
                                        <Link to='/' className='img-details__img'>
                                            <img src={product.img} alt="mobile" />
                                        </Link>
                                        <div className='img-details__details'>
                                            <span>
                                                <span>{product.name}</span>
                                                <b> x{product.quantity}</b>
                                            </span>
                                            <span>
                                                <span>Color: </span>
                                                <span className='details__color'>{product.color}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <span>
                                        {formatPrice(calcDiscountPrice(product.price, product.saleoff))}
                                    </span>
                                </div>
                            )}
                        </div>
                    }
                    <div className='content__row'>
                        <span><b>{cart.reduce((sum, product) => sum + Number(product.quantity), 0)}</b> Sản phẩm</span>
                        <span>
                            {formatPrice(cart.reduce((sum, product) =>
                                sum + calcDiscountPrice(product.price, product.saleoff) * Number(product.quantity), 0))}
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
                        {formatPrice(cart.reduce((sum, product) =>
                            sum + calcDiscountPrice(product.price, product.saleoff) * Number(product.quantity), 0))}
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