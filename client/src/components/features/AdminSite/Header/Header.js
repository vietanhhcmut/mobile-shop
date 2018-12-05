import React, { Component } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { logoSite } from "../../../../constants/constants";
import { api } from '../../../../constants/constants';

export default class Header extends Component {
    state = {
        categories: []
    }
    
    componentDidMount() {
        api.getBrands()
          .then(categories => this.setState({ categories }));
    }
    render() {
        const { categories } = this.state;
        return (
            <div>
                <header>
                    <div className="logo__admin">
                        <img src={logoSite} alt="not found" />
                    </div>
                </header>
                <div className="sidebar">
                    <ul className="sidebar__menu">
                        <Link to="/admin/bill"><li>Đơn hàng</li></Link>
                        <Link to="/admin/user"><li>Người dùng</li></Link>
                        {/* <Link to="/admin/product"><li>Sản phẩm</li></Link> */}
                        <li className="sidebar__submenu">
                            <span>
                                Sản Phẩm
                                <i className="material-icons">arrow_drop_down</i>
                            </span>
                            <div className="sidebar__tree-submenu">
                                <ul>
                                    <Link to="/admin/category"><li>Category</li></Link>
                                    <Link to="/admin/product"><li>Product</li></Link>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}
