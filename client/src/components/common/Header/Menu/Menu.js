import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({
  showMenu,
  handleShowMenu,
  categories,
  handleToggle,
  handleActivePage,
  active
}) => (
    <ul className="menu-items">
      <Link to="/" className="link">
        <li
          id={active === "trang-chu" ? "menu-items__active" : ""}
          className="menu-items1"
          onClick={e => {
            handleToggle();
            handleActivePage("trang-chu");
          }}
        >
          Trang chủ
      </li>
      </Link>
      <div className={showMenu ? "menu-items__list-categories" : ""}>
        <li
          className="menu-items2"
          id={active === "danh-muc" ? "menu-items__active" : ""}
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
                      handleActivePage("danh-muc");
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
          id={active === "gioi-thieu" ? "menu-items__active" : ""}
          className="menu-items3"
          onClick={e => {
            handleToggle();
            handleActivePage("gioi-thieu");
          }}
        >
          Giới thiệu
      </li>
      </Link>
      <Link to="/login" className="link">
        <li
          id={active === "dang-nhap" ? "menu-items__active" : ""}
          className="menu-items4"
          onClick={e => {
            handleToggle();
            handleActivePage("dang-nhap");
          }}
        >
          Đăng nhập
      </li>
      </Link>
      <Link to="/signup" className="link">
        <li
          id={active === "dang-ki" ? "menu-items__active" : ""}
          className="menu-items5"
          onClick={e => {
            handleToggle();
            handleActivePage("dang-ki");
          }}
        >
          Đăng kí
      </li>
      </Link>
    </ul>
  );
export default Menu;
