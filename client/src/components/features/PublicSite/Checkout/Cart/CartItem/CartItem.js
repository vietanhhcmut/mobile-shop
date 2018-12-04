import React, { Component } from 'react';
import './CartItem.css';
import { calcDiscountPrice, formatPrice } from '../../../../../../constants/constants';
import { Link } from 'react-router-dom';
import axios from '../../../../../../constants/axiosInstance';

class CartItem extends Component {
    state = {
        img: '',
        name: '',
        price: 0,
        saleoff: 0
    }
    componentDidMount() {
        axios.get("/api/product/getOne.php?id=" + this.props.productId)
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
        const { productId, quantity, color } = this.props;
        return (
            <div className='products__product'>
                <div className='product__img-details'>
                    <Link to={`/item/${productId}`} className='img-details__img'>
                        <img src={img} alt="mobile" />
                    </Link>
                    <div className='img-details__details'>
                        <span>
                            <Link to={`/item/${productId}`} className='details__product-name'>{name}</Link>
                            <b> x{quantity}</b>
                        </span>
                        <span>
                            <span>Màu: </span>
                            <span className='details__color'>{color}</span>
                        </span>
                    </div>
                </div>
                <span>
                    {formatPrice(calcDiscountPrice(price, saleoff))}
                </span>
            </div>
        );
    }
}

export default CartItem;