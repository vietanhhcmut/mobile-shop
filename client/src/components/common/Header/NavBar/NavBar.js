import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Context from "../../../../Context";

export default class NavBar extends Component {
  static contextType = Context;
  render() {
    const { categories, active, handleActivePage, isAdmin } = this.props;
    return (
      <ul className="navbar-items">
        <Link to="/" className="navbar-item__link">
          <li
            className="navbar-item"
            id={active === "/" ? "active-page" : ""}
            onClick={() => handleActivePage("/")}
          >
            Trang chủ
          </li>
        </Link>

        <li
          className="navbar-item category"
          id={active.indexOf("/category") >= 0 ? "active-page" : ""}
        >
          <span className="navbar-item__categories">
            Danh mục
            <i className="material-icons category__icon">arrow_drop_down</i>
          </span>
          <div className="table-categories">
            <div className="table-categories__item1">
              {categories.map(category => (
                <Link
                  to={`/category/${category.id}`}
                  className="link"
                  key={category.id}
                >
                  <div
                    onClick={() => handleActivePage(`/category/${category.id}`)}
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
            id={active === "/about" ? "active-page" : ""}
            onClick={() => handleActivePage("/about")}
          >
            Giới thiệu
          </li>
        </Link>

        {localStorage.getItem("userToken") ? (
          <Fragment>
            <Link to="/info" className="navbar-item__link">
              <li
                className="navbar-item"
                id={active === "/info" ? "active-page" : ""}
                onClick={() => handleActivePage("/info")}
              >
                Thông tin
              </li>
            </Link>
            {isAdmin === "1" && (
              <Link to="/admin" className="navbar-item__link">
                <li
                  className="navbar-item"
                  id={active === "/admin" ? "active-page" : ""}
                  onClick={() => handleActivePage("/admin")}
                >
                  Admin
                </li>
              </Link>
            )}
            <Link to="/" className="navbar-item__link">
              <li
                className="navbar-item"
                onClick={e => {
                  localStorage.removeItem("userToken");
                  this.context.handleGetCart();
                }}
              >
                Đăng xuất
              </li>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link to="/signup" className="navbar-item__link">
              <li
                className="navbar-item"
                id={active === "/signup" ? "active-page" : ""}
                onClick={() => handleActivePage("/signup")}
              >
                Đăng kí
              </li>
            </Link>
            <Link to="/login" className="navbar-item__link">
              <li
                className="navbar-item"
                id={active === "/login" ? "active-page" : ""}
                onClick={() => handleActivePage("/login")}
              >
                Đăng nhập
              </li>
            </Link>
          </Fragment>
        )}
      </ul>
    );
  }
}
