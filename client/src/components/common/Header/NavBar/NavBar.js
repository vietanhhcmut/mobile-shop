import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class Menu extends Component {
  state = {
    active: "trang-chu"
  };
  handleActivePage = page => () => {
    this.setState({
      active: page
    });
  };
  render() {
    const { categories } = this.props;
    return (
      <ul className="navbar-items">
        <Link to="/" className="navbar-item__link">
          <li
            className="navbar-item"
            id={this.state.active === "trang-chu" && "active-page"}
            onClick={this.handleActivePage("trang-chu")}
          >
            Trang chủ
          </li>
        </Link>

        <li
          className="navbar-item category"
          id={this.state.active === "danh-muc" && "active-page"}
        >
          <span className="navbar-item__categories">
            Danh mục
            <i className="material-icons category__icon">arrow_drop_down</i>
          </span>
          <div className="table-categories">
            <div className="table-categories__item1">
              {categories.map(category => (
                <Link to={`/category/${category.id}`} className="link">
                  <div
                    key={category.id}
                    onClick={this.handleActivePage("danh-muc")}
                  >
                    {category.name}
                  </div>
                </Link>
              ))}
            </div>
            <div className="table-categories__item2">
              <img
                src="https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/leobootstrapmenu/1.jpg"
                alt="not found"
              />
            </div>
          </div>
        </li>
        <Link to="/about" className="navbar-item__link">
          <li
            className="navbar-item"
            id={this.state.active === "gioi-thieu" && "active-page"}
            onClick={this.handleActivePage("gioi-thieu")}
          >
            Giới thiệu
          </li>
        </Link>
        <Link to="/login" className="navbar-item__link">
          <li
            className="navbar-item"
            id={this.state.active === "dang-ki" && "active-page"}
            onClick={this.handleActivePage("dang-ki")}
          >
            Đăng kí
          </li>
        </Link>
        <Link to="/signup" className="navbar-item__link">
          <li
            className="navbar-item"
            id={this.state.active === "dang-nhap" && "active-page"}
            onClick={this.handleActivePage("dang-nhap")}
          >
            Đăng nhập
          </li>
        </Link>
      </ul>
    );
  }
}
