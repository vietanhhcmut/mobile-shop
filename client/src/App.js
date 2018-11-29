import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicSite from './components/features/PublicSite/PublicSite';
import SignupPage from './components/features/PublicSite/SignupPage/SignupPage';
import NotFoundPage from './components/features/NotFoundPage/NotFoundPage';
import Context from './Context';

class App extends Component {
  state = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    addToCart: false
  }
  handleAddToCart = (productId, quantity, color) => {
    const cart = [...this.state.cart];
    const index = cart.findIndex(_ => _.productId === productId);
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
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({ cart, addToCart: true });
    setTimeout(() => {
      this.setState({ addToCart: false });
    }, 3600);
  }
  render() {
    const { cart, addToCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Context.Provider value={{
            cart,
            handleAddToCart: this.handleAddToCart,
            addToCart
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
