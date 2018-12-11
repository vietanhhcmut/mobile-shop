import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import Context from "../../../../Context";

class Menu extends Component {
  static contextType = Context;
  render() {
    const {
      showMenu,
      handleShowMenu,
      categories,
      handleToggle,
      handleActivePage,
      active,
      isAdmin
    } = this.props;
    return (
      <ul className="menu-items">
        <Link to="/" className="link">
          <li
            id={active === "/" ? "menu-items__active" : ""}
            className="menu-items1"
            onClick={e => {
              handleToggle();
              handleActivePage("/");
            }}
          >
            Trang chủ
          </li>
        </Link>
        <div className={showMenu ? "menu-items__list-categories" : ""}>
          <li
            className="menu-items2"
            id={active.indexOf("/category") >= 0 ? "active-page" : ""}
            onClick={handleShowMenu}
          >
            <span className="menu-items2__text">Danh mục</span>
            <i className="material-icons menu-items2__icon">expand_more</i>
          </li>
          {showMenu && (
            <div className="menu-item">
              <div className="menu-item__item1">
                {categories.map(category => (
                  <Link to={`/category/${category.id}`} className="link">
                    <div
                      key={category.id}
                      onClick={e => {
                        handleToggle();
                        handleActivePage(`/category/${category.id}`);
                      }}
                    >
                      {category.name}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="menu-item__item2">
                <img
                  src="https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/leobootstrapmenu/1.jpg"
                  alt="not found"
                />
              </div>
            </div>
          )}
        </div>
        <Link to="/about" className="link">
          <li
            id={active === "/about" ? "menu-items__active" : ""}
            className="menu-items3"
            onClick={e => {
              handleToggle();
              handleActivePage("/about");
            }}
          >
            Giới thiệu
          </li>
        </Link>
        {localStorage.getItem("userToken") ? (
          <Fragment>
            <Link to="/info" className="link">
              <li
                id={active === "/logout" ? "menu-items__active" : ""}
                className="menu-items4"
                onClick={e => {
                  handleToggle();
                  handleActivePage("/logout");
                }}
              >
                Thông tin
              </li>
            </Link>
            {isAdmin === "1" && (
              <Link to="/admin" className="link">
                <li
                  className="menu-items5"
                  id={active === "/admin" ? "menu-items__active" : ""}
                  onClick={() => handleActivePage("/admin")}
                >
                  Admin
                </li>
              </Link>
            )}
            <Link to="/login" className="link">
              <li
                className="menu-items5"
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
            <Link to="/login" className="link">
              <li
                id={active === "/login" ? "menu-items__active" : ""}
                className="menu-items4"
                onClick={e => {
                  handleToggle();
                  handleActivePage("/login");
                }}
              >
                Đăng nhập
              </li>
            </Link>
            <Link to="/signup" className="link">
              <li
                id={active === "/signup" ? "menu-items__active" : ""}
                className="menu-items5"
                onClick={e => {
                  handleToggle();
                  handleActivePage("/signup");
                }}
              >
                Đăng kí
              </li>
            </Link>
          </Fragment>
        )}
      </ul>
    );
  }
}

export default Menu;
