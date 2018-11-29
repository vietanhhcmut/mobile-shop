import React, { Component } from 'react';
import './CartModal.css';
import CartItem from './CartItem/CartItem';
import { formatPrice, calcDiscountPrice, calcTotalQuantity } from './../../../constants/constants';
import { Link } from 'react-router-dom';
import Context from '../../../Context';

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
    updateQuantity = (index, newQuantity) => {
        const cart = [...this.state.cart];
        const cartItem = { ...cart[index] };
        cartItem.quantity = newQuantity;
        cart[index] = cartItem;
        this.setState({ cart });
    }
    clickIncreaseQuantity = (index) => () => {
        this.updateQuantity(index, Number(this.state.cart[index].quantity) + 1);
    }
    clickDecreaseQuantity = (index) => () => {
        const quantity = Number(this.state.cart[index].quantity);
        if (quantity < 2) return;
        this.updateQuantity(index, quantity - 1);
    }
    clickDeletProduct = (index) => () => {
        const cart = [...this.state.cart];
        cart.splice(index, 1);
        this.setState({ cart });
    }
    render() {
        const { showCart, cart } = this.state;
        const styleCartContent = {
            transform: showCart ? 'translateY(0)' : 'translateY(300px)'
        }
        return (
            <div className='cart-modal'>
                <div className='cart-modal__icon-wrapper' onClick={this.handleClickCartIcon}>
                    <i className="material-icons icon-wrapper__cart-icon">shopping_cart</i>
                    <div className='icon-wrapper__product-quantity'>
                        <Context.Consumer>
                            {context => calcTotalQuantity(context.cart)}
                        </Context.Consumer>
                    </div>
                    <div className='icon-wrapper__animation'>
                    </div>
                    <Context.Consumer>
                        {context => context.addToCart ?
                            <div className='icon-wrapper__animation'>
                            </div>
                            :
                            null
                        }
                    </Context.Consumer>

                </div>
                <div className='cart-modal__cart-content' style={styleCartContent}>
                    <div className='cart-content__products'>
                        {(!cart || cart.length === 0) &&
                            <i>Không có sản phẩm nào trong giỏ hàng của bạn. Quay lại mua nào!</i>
                        }
                        {cart.map((product, index) =>
                            <CartItem
                                key={product.id}
                                img={product.img}
                                name={product.name}
                                price={product.price}
                                saleoff={product.saleoff}
                                quantity={product.quantity}
                                handleClickIncreaseQuantity={this.clickIncreaseQuantity(index)}
                                handleClickDecreaseQuantity={this.clickDecreaseQuantity(index)}
                                handleClickDeleteProduct={this.clickDeletProduct(index)} />
                        )}
                    </div>
                    <div className='cart-content__total-price'>
                        <div className='total-price__row'>
                            <span><b>{cart.reduce((sum, product) => sum + Number(product.quantity), 0)}</b> Sản phẩm</span>
                            <span>
                                {formatPrice(cart.reduce((sum, product) =>
                                    sum + calcDiscountPrice(product.price, product.saleoff) * Number(product.quantity), 0))}
                            </span>
                        </div>
                        <div className='total-price__row'>
                            <span>Phí giao hàng</span>
                            <span>Miễn phí</span>
                        </div>
                        <div className='total-price__row total-price__total'>
                            <span>Tổng cộng</span>
                            <b>
                                {formatPrice(cart.reduce((sum, product) =>
                                    sum + calcDiscountPrice(product.price, product.saleoff) * Number(product.quantity), 0))}

                            </b>
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