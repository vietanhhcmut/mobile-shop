import React, { Component } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { logoSite } from "../../../../constants/constants";

export default class Header extends Component {
  
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <div className="logo__main-logo">
                            <img src={logoSite} alt="not found" />
                        </div>
                    </div>
                </header>
                <div className="sidebar">
                    <ul className="sidebar__menu">
                        <Link to="/admin/bill"><li>Đơn hàng</li></Link>
                        <Link to="/admin/user"><li>Người dùng</li></Link>
                        <Link to="/admin/product"><li>Sản phẩm</li></Link>
                    </ul>
                </div>
            </div>

        );
    }
}
