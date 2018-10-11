import React, { Component } from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';

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
                <div className='cart__order-wrapper'>
                    <div className='order-wrapper__title'>GIỎ HÀNG</div>
                    <div className='order-wrapper__order'>
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
                <div className='cart__total-price'>

                </div>
            </div>
        );
    }
}

export default Cart;