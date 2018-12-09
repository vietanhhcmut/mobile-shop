
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicSite from './components/features/PublicSite/PublicSite';
import NotFoundPage from './components/features/NotFoundPage/NotFoundPage';
import AdminSite from './components/features/AdminSite/AdminSite'
import Context from './Context';
import axios from './constants/axiosInstance';
import axiosValidate from './constants/axiosValidate';

class App extends Component {
  state = {
    cart: [],
    totalPrice: 0,
    addToCart: false
  };
  componentDidMount() {
    this.handleGetCart();
  }
  handleGetCart = () => {
    if (localStorage.getItem('userToken')) {
      axiosValidate.get('/api/cartItem/getUserCart.php')
        .then(res => {
          console.log(res);
          const cart = res.data.map(_ => ({
            userId: _.userId,
            productId: _.productId,
            quantity: parseInt(_.quantity),
            color: _.color
          }))
          this.setState({ cart });
          this.handleCalcTotalPrice(cart);
        })
        .catch(err => {
          console.log(err);
        })
    }
    else {
      this.setState({ cart: JSON.parse(localStorage.getItem("cart")) || [] });
    }
  }
  handleCalcTotalPrice = cart => {
    axios
      .post("/api/product/getTotalPrice.php", { cart })
      .then(res => {
        this.setState({ totalPrice: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleAddToCart = (productId, quantity, color, boundingImg, srcImg) => {
    const cart = [...this.state.cart];
    const index = cart.findIndex(
      _ => _.productId === productId && _.color === color
    );
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

    if (localStorage.getItem('userToken')) {
      axiosValidate.post('/api/cartItem/add.php', { productId, quantity, color })
        .catch(err => {
          console.log(err);
        });
    }
    else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    this.handleCalcTotalPrice(cart);

    const tempImg = document.createElement("img");
    tempImg.src = srcImg;
    tempImg.className = "img-add-to-cart";
    tempImg.style.bottom = window.innerHeight - boundingImg.bottom + "px";
    tempImg.style.left = boundingImg.left + "px";
    tempImg.style.width = boundingImg.width + "px";
    tempImg.style.height = boundingImg.height + "px";
    document.getElementById("root").append(tempImg);

    setTimeout(() => {
      tempImg.style.bottom = "30px";
      tempImg.style.left = "30px";
      tempImg.style.width = "0";
      tempImg.style.height = "0";
    }, 1);

    this.setState({ cart, addToCart: true });
    setTimeout(() => {
      this.setState({ addToCart: false });
      tempImg.remove();
    }, 3600);
  };
  handleChangeQuantity = (cartItemIndex, quantity) => {
    if (quantity < 1) return;
    const cart = [...this.state.cart];
    const cartItem = { ...cart[cartItemIndex] };
    cartItem.quantity = quantity;
    cart[cartItemIndex] = cartItem;
    this.handleCalcTotalPrice(cart);
    if (localStorage.getItem('userToken')) {
      const { productId, color } = cartItem;
      axiosValidate.post('/api/cartItem/update.php', { productId, quantity, color })
        .catch(err => {
          console.log(err);
        });
    }
    else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    this.setState({ cart });
  };
  handleDeleteCartItem = index => () => {
    const cart = [...this.state.cart];
    const cartItem = cart[index];
    cart.splice(index, 1);
    this.handleCalcTotalPrice(cart);
    if (localStorage.getItem('userToken')) {
      const { productId, color } = cartItem;
      axiosValidate.delete(`/api/cartItem/delete.php?productId=${productId}&color=${color}`)
        .catch(err => {
          console.log(err);
        });
    }
    else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    this.setState({ cart });
  };
  render() {
    const { cart, addToCart, totalPrice } = this.state;
    return (
      <Context.Provider value={{
        cart,
        addToCart,
        totalPrice,
        handleAddToCart: this.handleAddToCart,
        handleChangeQuantity: this.handleChangeQuantity,
        handleDeleteCartItem: this.handleDeleteCartItem,
        handleGetCart: this.handleGetCart
      }}>
        <BrowserRouter>
          <Switch>
            {/* Phần dưới chưa tạo component */}
            <Route path="/admin" component={AdminSite} />
            <Route path="/sorry" component={NotFoundPage} />
            <Route path="/" component={PublicSite} />
          </Switch>

        </BrowserRouter>
      </Context.Provider>
    );
  }
}

export default App;
