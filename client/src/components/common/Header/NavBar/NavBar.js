import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  state = {
    active: this.props.location.pathname
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
            id={this.state.active === "/" ? "active-page" : ""}
            onClick={this.handleActivePage("/")}
          >
            Trang chủ
          </li>
        </Link>

        <li
          className="navbar-item category"
          id={this.state.active === "danh-muc" ? "active-page" : ""}
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
                  <div onClick={this.handleActivePage("danh-muc")}>
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
            id={this.state.active === "/about" ? "active-page" : ""}
            onClick={this.handleActivePage("/about")}
          >
            Giới thiệu
          </li>
        </Link>
        <Link to="/signup" className="navbar-item__link">
          <li
            className="navbar-item"
            id={this.state.active === "/signup" ? "active-page" : ""}
            onClick={this.handleActivePage("/signup")}
          >
            Đăng kí
          </li>
        </Link>
        <Link to="/login" className="navbar-item__link">
          <li
            className="navbar-item"
            id={this.state.active === "/login" ? "active-page" : ""}
            onClick={this.handleActivePage("/login")}
          >
            Đăng nhập
          </li>
        </Link>
      </ul>
    );
  }
}
export default withRouter(NavBar);
