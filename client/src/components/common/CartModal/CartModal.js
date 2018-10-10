import React, { Component } from 'react';
import './CartModal.css';
import CartItem from './CartItem/CartItem';

class CartModal extends Component {
    state = {
        showCart: false
    }
    handleClickCartIcon = () => {
        this.setState({ showCart: true });
    }
    handleClickBackdrop = () => {
        this.setState({ showCart: false });
    }
    render() {
        const { showCart } = this.state;
        const styleCartContent = {
            transform: showCart ? 'translateY(0)' : 'translateY(100%)'
        }
        return (
            <div className='cart-modal'>
                <div className='cart-modal__icon-wrapper' onClick={this.handleClickCartIcon}>
                    <i class="material-icons icon-wrapper__cart-icon">shopping_cart</i>
                    <div className='icon-wrapper__product-quantity'>
                        3
                    </div>
                </div>
                <div className={showCart ? 'cart-modal__backdrop' : ''}
                    onClick={this.handleClickBackdrop}>
                    <div className='cart-modal__cart-content' style={styleCartContent}>
                        <CartItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartModal;