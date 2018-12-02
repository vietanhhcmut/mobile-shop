import React, { Component } from 'react';
import './CartItem.css';
import { calcDiscountPrice, formatPrice } from '../../../../constants/constants';
import { Link } from 'react-router-dom';
import axios from '../../../../constants/axiosInstance';
import Context from '../../../../Context';

class CartItem extends Component {
    static contextType = Context;
    state = {
        img: '',
        name: '',
        price: 0,
        saleoff: 0
    }
    componentDidMount() {
        axios.post("/api/product/readOneProduct.php", { id: this.props.productId })
            .then(res => {
                const product = res.data;
                this.setState({ 
                    img: product.imgs[0], 
                    name: product.name, 
                    price: product.price,
                    saleoff: product.saleoff
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        const { img, name, price, saleoff } = this.state;
        const { index, quantity, color } = this.props;
        return (
            <div className='products__cart-item'>
                <Link to='/' className='cart-item__product-img'>
                    <img src={img} alt="mobile" />
                </Link>
                <div className='cart-item__info'>
                    <Link to='/' className='info__product-name'>{name}</Link>
                    
                    <span className='info__discount-price'>{formatPrice(calcDiscountPrice(price, saleoff))}</span>
                    <div>
                        <span className='info__original-price'>{formatPrice(price)}</span> 
                        <i className='info__saleoff'>-{saleoff}%</i>
                    </div>
                    <span className='info__product-color'>Màu: <span>color</span></span>
                    <div className='info__quantity-adjusting'>
                        <span onClick={this.context.handleChangeQuantity(index, quantity - 1)}>-</span>
                        <b className='quantity-adjusting__product-quantity'>{quantity}</b>
                        <span onClick={this.context.handleChangeQuantity(index, quantity + 1)}>+</span>
                    </div>
                </div>
                <i className="material-icons cart-item__remove-product"
                    onClick={this.context.handleDeleteCartItem(index)}>clear</i>
            </div>
        );
    }
}

export default CartItem;