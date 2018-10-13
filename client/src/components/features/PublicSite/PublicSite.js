import React, { Component } from 'react';
import './PublicSite.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../common/Header/Header';
import Footer from './../../common/Footer/Footer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout'
import AboutUs from './AboutUs/AboutUs';
import Category from './Category/Category';
import DetailedItem from './Item/DetailedItem';
import LoginPage from './LoginPage/LoginPage';
import SignupPage from './SignupPage/SignupPage';
import HomePage from './HomePage/HomePage';
import CartModal from '../../common/CartModal/CartModal';
import PasswordRecoveryPage from './PasswordRecoveryPage/PasswordRecoveryPage';

class PublicSite extends Component {
    render() {
        return (
            <div className="public-site">
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route path="/about" exact component={AboutUs} />
                    <Route path="/category/:id" exact component={Category} />
                    <Route path="/item/:id" exact component={DetailedItem} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/signup" exact component={SignupPage} />
                    <Route path="/password-recovery" exact component={PasswordRecoveryPage} />
                    <Redirect to="/sorry" />
                </Switch>
                <CartModal />
                <Footer />
            </div>
        );
    }
}

export default PublicSite;