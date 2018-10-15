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
    updateQuantity = (index, newQuantity) => {
        const cart = [...this.state.cart];
        const cartItem = {...cart[index]};
        cartItem.quantity = newQuantity;
        cart[index] = cartItem;
        this.setState({ cart });
    }
    changeQuantity = (index) => (e) => {
        const quantity = e.target.value;
        if (quantity === '0') return;
        if (!/^[0-9]*$/.test(quantity)) return;
        this.updateQuantity(index, quantity);
    }
    blurQuantity = (index) => (value) => (e) => {
        let quantity = value;
        if (value === '') quantity = 1;
        this.updateQuantity(index, quantity);
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
        const { cart } = this.state;
        return (
            <div className='cart'>
                <div className='cart__left-side'>
                    <div className='left-side__order-wrapper'>
                        <div className='order-wrapper__title'>GIỎ HÀNG</div>
                        {(!cart || cart.length === 0) && 
                        <div className='order__item'>Không có sản phẩm nào trong giỏ hàng của bạn. Quay lại mua nào!</div> 
                        }
                        <div>
                            {cart.map((product, index) =>
                                <CartItem
                                    key={product.id}
                                    img={product.img}
                                    name={product.name}
                                    price={product.price}
                                    saleoff={product.saleoff}
                                    quantity={product.quantity}
                                    color={product.color}
                                    handleChangeQuantity={this.changeQuantity(index)}
                                    handleBlurQuantity={this.blurQuantity(index)}
                                    handleClickIncreaseQuantity = {this.clickIncreaseQuantity(index)}
                                    handleClickDecreaseQuantity = {this.clickDecreaseQuantity(index)}
                                    handleClickDeleteProduct = {this.clickDeletProduct(index)} />
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
                                    <b>{cart.reduce((sum, product) => sum + Number(product.quantity), 0)}</b> Sản phẩm
                                </span>
                                <b>
                                    {formatPrice(cart.reduce((sum, product) =>
                                        sum + calcDiscountPrice(product.price, product.saleoff) * Number(product.quantity), 0))}
                                </b>
                            </div>
                            <div className='total-checkout__row'>
                                <span>Phí giao hàng</span>
                                <b>Free</b>
                            </div>
                        </div>
                        <div className='order-summary__total-checkout'>
                            <div className='total-checkout__row'>
                                <span>Tổng cộng</span>
                                <b className='row__total-price'>
                                    {formatPrice(cart.reduce((sum, product) =>
                                        sum + calcDiscountPrice(product.price, product.saleoff) * Number(product.quantity), 0))}
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