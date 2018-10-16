import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ showMenu, handleShowMenu, categories }) => (
  <ul className="menu-items">
    <Link to="/" className="link">
      <li className="menu-items1">Trang chủ</li>
    </Link>
    <div className={showMenu ? "menu-items__list-categories" : ""}>
      <li className="menu-items2" onClick={handleShowMenu}>
        <span className="menu-items2__text">Danh mục</span>
        <i className="material-icons menu-items2__icon">expand_more</i>
      </li>
      {showMenu && (
        <div className="menu-item">
          <div className="menu-item__item1">
            {categories.map(category => (
              <Link to={`/category/${category.id}`} className="link">
                <div key={category.id}>{category.name}</div>
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
      <li className="menu-items3">Giới thiệu</li>
    </Link>
    <Link to="/login" className="link">
      <li className="menu-items4">Đăng nhập</li>
    </Link>
    <Link to="/signup" className="link">
      <li className="menu-items5">Đăng kí</li>
    </Link>
  </ul>
);
export default Menu;
