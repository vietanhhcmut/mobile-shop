import React, { Component } from 'react';
import './CartModal.css';
import CartItem from './CartItem/CartItem';
import { formatPrice, calcTotalQuantity } from './../../../constants/constants';
import { Link } from 'react-router-dom';
import Context from '../../../Context';
import axios from '../../../constants/axiosInstance';

class CartModal extends Component {
    static contextType = Context;
    state = {
        showCart: false,
        totalPrice: 0
        // cart: JSON.parse(localStorage.getItem('cart')) || []
        // [
        //     {
        //         id: '123',
        //         img: 'https://demo4leotheme.com/prestashop/leo_mobile/33-small_default/printed-dress.jpg',
        //         name: 'Samsung Galaxy Tab',
        //         price: 16998000,
        //         saleoff: 5,
        //         quantity: 1
        //     },
        //     {
        //         id: '456',
        //         img: 'https://demo4leotheme.com/prestashop/leo_mobile/24-small_default/printed-chiffon-dress.jpg',
        //         name: 'Sony Xperia XZs',
        //         price: 7569000,
        //         saleoff: 3,
        //         quantity: 3
        //     },
        //     {
        //         id: '789',
        //         img: 'https://demo4leotheme.com/prestashop/leo_mobile/43-small_default/printed-dress.jpg',
        //         name: 'OPPO F3 Plus',
        //         price: 9890000,
        //         saleoff: 10,
        //         quantity: 2
        //     }
        // ]
    }
    componentDidMount() {
        const cart = this.context.cart;
        axios.post("/api/product/calcTotalPrice.php", { cart })
            .then(res => {
                this.setState({ totalPrice: res.data });
            })
            .catch(err => {
                console.log(err);
            });
       
    }
    handleShowModal = () => {
        this.setState({ showCart: true });
    }
    handleHideModal = () => {
        this.setState({ showCart: false });
    }
    handleChangeQuantity = (index, newQuantity) => {
        const cart = [...this.state.cart];
        const cartItem = { ...cart[index] };
        cartItem.quantity = newQuantity;
        cart[index] = cartItem;
        this.setState({ cart });
    }
    handleIncreaseQuantity = (index) => () => {
        this.handleChangeQuantity(index, Number(this.state.cart[index].quantity) + 1);
    }
    handleDecreaseQuantity = (index) => () => {
        const quantity = Number(this.state.cart[index].quantity);
        if (quantity < 2) return;
        this.handleChangeQuantity(index, quantity - 1);
    }
    handleDeleteProduct = (index) => () => {
        const cart = [...this.state.cart];
        cart.splice(index, 1);
        this.setState({ cart });
    }
    render() {
        const { cart } = this.context;
        const { showCart, totalPrice } = this.state;
        const styleCartContent = {
            transform: showCart ? 'translateY(0)' : 'translateY(300px)'
        }
        return (
            <div className='cart-modal'>
                <div className='cart-modal__icon-wrapper' onClick={this.handleShowModal}>
                    <i className="material-icons icon-wrapper__cart-icon">shopping_cart</i>
                    <div className='icon-wrapper__product-quantity'>
                        {calcTotalQuantity(this.context.cart)}
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
                                key={cartItem.productId}
                                // img={product.img}
                                // name={product.name}
                                // price={product.price}
                                // saleoff={product.saleoff}
                                index={index}
                                productId={cartItem.productId}
                                quantity={cartItem.quantity}
                                handleIncreaseQuantity={this.handleIncreaseQuantity(index)}
                                handleDecreaseQuantity={this.handleDecreaseQuantity(index)}
                                handleDeleteProduct={this.handleDeleteProduct(index)} />
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