import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../AdminSite/Header/Header';
import CMSProduct from "../AdminSite/CMSProduct/CMSProduct";
import CMSUser from "../AdminSite/CMSUser/CMSUser";
import CMSBill from "../AdminSite/CMSBill/CMSBill";
import CMSCategory from "../AdminSite/CMSCategory/CMSCategory";
import './AdminSite.css'

export default class AdminSite extends Component {
    render() {
        return (
            <div className="admin-site">
                <Header />
                <Switch>
                    <Route path="/admin" exact component={CMSProduct} />
                    <Route path="/admin/bill" exact component={CMSBill} />
                    <Route path="/admin/user" exact component={CMSUser} />
                    <Route path="/admin/product" exact component={CMSProduct} />
                    <Route path="/admin/category" exact component={CMSCategory} />
                    <Redirect to="/sorry" />
                </Switch>
            </div>
        );
    }
}
