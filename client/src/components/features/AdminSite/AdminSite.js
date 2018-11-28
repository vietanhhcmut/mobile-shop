import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../AdminSite/Header/Header';
import CMSProduct from "../AdminSite/CMSProduct/CMSProduct";
import './AdminSite.css'

export default class AdminSite extends Component {
    render() {
        return (
            <div className="admin-site">
                <Header />
                <Switch>
                    <Route path="/admin" exact component={CMSProduct} />
                    <Route path="/admin/bill" exact component={CMSProduct} />
                    <Route path="/admin/user" exact component={CMSProduct} />
                    <Route path="/admin/product" exact component={CMSProduct} />
                    <Redirect to="/sorry" />
                </Switch>
            </div>
        );
    }
}
