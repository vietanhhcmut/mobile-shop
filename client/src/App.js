import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/features/HomePage/HomePage';
import Cart from './components/features/Cart/Cart';
import AboutUs from './components/features/AboutUs/AboutUs';
import Category from './components/features/Category/Category';
import DetailedItem from './components/features/Item/DetailedItem';
import LoginPage from './components/features/LoginPage/LoginPage';
import SignupPage from './components/features/SignupPage/SignupPage';
import NotFoundPage from './components/features/NotFoundPage/NotFoundPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/category/:id" exact component={Category} />
          <Route path="/item/:id" exact component={DetailedItem} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          {/* Phần dưới chưa tạo component */}
          <Route path="/admin/user" exact component={SignupPage} />
          <Route path="/admin/product" exact component={SignupPage} />
          <Route path="/admin/bill" exact component={SignupPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
