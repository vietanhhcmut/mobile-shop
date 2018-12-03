import React, { Component } from 'react';
import './CartItem.css';
import { calcDiscountPrice, formatPrice } from '../../../../../constants/constants';
import { Link } from 'react-router-dom';
import axios from '../../../../../constants/axiosInstance';
import Context from '../../../../../Context';

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
    handleChangeQuantity = (e) => {
        const quantity = e.target.value;
        if (quantity === '0' || quantity === '') return;
        if (!/^[0-9]*$/.test(quantity)) return;
        this.context.handleChangeQuantity(this.props.index, parseInt(quantity));
    }
    render() {
        const { img, name, price, saleoff } = this.state;
        const { index, quantity, color } = this.props;
        const discountPrice = calcDiscountPrice(price, saleoff);
        return (
            <div className='order__item'>
                <Link to='/' className='item__product-img'>
                    <img src={img} alt="mobile" />
                </Link>
                <div className='item__info-wrapper'>
                    <div className='info-wrapper__product-info'>
                        <Link to='/' className='product-info__name'>{name}</Link>
                        <span className='product-info__discount-price'>{formatPrice(discountPrice)}</span>
                        <div>
                            <span className='product-info__original-price'>{formatPrice(price)}</span>
                            <span className='product-info__saleoff'>-{saleoff}%</span>
                            <p className='product-info__color'>
                                <b>Color: </b>
                                <span>{color}</span>
                            </p>
                        </div>
                    </div>
                    <div className='info-wrapper__quantity-total'>
                        <div className='quantity-total__product-quantity'>
                            <input className='product-quantity__quantity' 
                                value={quantity} type="text" 
                                onChange={this.handleChangeQuantity} />
                            <div className='product-quantity__arrows'>
                                <div className="material-icons arrows__arrow-up"
                                    onClick={() => this.context.handleChangeQuantity(index, quantity + 1)}>
                                    keyboard_arrow_up
                                </div>
                                <div className="material-icons arrows__arrow-down" 
                                    onClick={() => this.context.handleChangeQuantity(index, quantity - 1)}>
                                    keyboard_arrow_down
                                </div>
                            </div>
                        </div>
                        <div className='quantity-total__total-price'>
                            {formatPrice(discountPrice * quantity)}
                        </div>
                    </div>
                    <i className="material-icons item__remove-product"
                        onClick={this.context.handleDeleteCartItem(index)}>delete</i>
                </div>
            </div>
        );
    }
}

export default CartItem;