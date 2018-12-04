import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicSite from './components/features/PublicSite/PublicSite';
import SignupPage from './components/features/PublicSite/SignupPage/SignupPage';
import NotFoundPage from './components/features/NotFoundPage/NotFoundPage';
import Context from './Context';
import axios from './constants/axiosInstance';

class App extends Component {
  state = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    totalPrice: 0,
    addToCart: false
  }
  componentDidMount() {
    this.handleCalcTotalPrice(this.state.cart);
  }
  handleCalcTotalPrice = (cart) => {
    axios.post("/api/product/calcTotalPrice.php", { cart })
      .then(res => {
        this.setState({ totalPrice: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleAddToCart = (productId, quantity, color, boundingImg, srcImg) => {
    const cart = [...this.state.cart];
    const index = cart.findIndex(_ => (_.productId === productId) && (_.color === color));
    if (index === -1)
      cart.push({
        productId,
        quantity,
        color
      });
    else {
      const cartItem = { ...cart[index] };
      cartItem.quantity += quantity;
      cart[index] = cartItem;
    }
    this.handleCalcTotalPrice(cart);
    localStorage.setItem('cart', JSON.stringify(cart));

    const tempImg = document.createElement('img');
    tempImg.src = srcImg;
    tempImg.className = 'img-add-to-cart';
    tempImg.style.bottom = (window.innerHeight - boundingImg.bottom) + 'px';
    tempImg.style.left = boundingImg.left + 'px';
    tempImg.style.width = boundingImg.width + 'px';
    tempImg.style.height = boundingImg.height + 'px';
    document.getElementById('root').append(tempImg);

    setTimeout(() => {
      tempImg.style.bottom = '30px';
      tempImg.style.left = '30px';
      tempImg.style.width = '0';
      tempImg.style.height = '0';
    }, 1);

    this.setState({ cart, addToCart: true });
    setTimeout(() => {
      this.setState({ addToCart: false });
      tempImg.remove();
    }, 3600);
  }
  handleChangeQuantity = (cartItemIndex, quantity) => {
    if (quantity < 1) return;
    const cart = [...this.state.cart];
    const cartItem = { ...cart[cartItemIndex] };
    cartItem.quantity = quantity;
    cart[cartItemIndex] = cartItem;
    this.handleCalcTotalPrice(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({ cart });
  }
  handleDeleteCartItem = (index) => () => {
    const cart = [...this.state.cart];
    cart.splice(index, 1);
    this.handleCalcTotalPrice(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({ cart });
  }
  render() {
    const { cart, addToCart, totalPrice } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Context.Provider value={{
            cart,
            addToCart,
            totalPrice,
            handleAddToCart: this.handleAddToCart,
            handleChangeQuantity: this.handleChangeQuantity,
            handleDeleteCartItem: this.handleDeleteCartItem
          }}>
            {/* Phần dưới chưa tạo component */}
            <Route path="/admin/user" exact component={SignupPage} />
            <Route path="/admin/product" exact component={SignupPage} />
            <Route path="/admin/bill" exact component={SignupPage} />
            <Route path="/sorry" component={NotFoundPage} />
            <Route path="/" component={PublicSite} />
          </Context.Provider>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
