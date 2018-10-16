import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = ({ categories }) => (
  <ul className="navbar-items">
    <Link to="/" className="navbar-item__link page-active">
      <li className="navbar-item">Trang chủ</li>
    </Link>

    <li className="navbar-item category">
      <span className="navbar-item__categories">
        Danh mục
        <i className="material-icons category__icon">arrow_drop_down</i>
      </span>
      <div className="table-categories">
        <div className="table-categories__item1">
          {categories.map(category => (
            <Link to={`/category/${category.id}`} className="link">
              <div key={category.id}>{category.name}</div>
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
      <li className="navbar-item">Giới thiệu</li>
    </Link>
    <Link to="/login" className="navbar-item__link">
      <li className="navbar-item">Đăng kí</li>
    </Link>
    <Link to="/signup" className="navbar-item__link">
      <li className="navbar-item">Đăng nhập</li>
    </Link>
  </ul>
);

export default Navbar;
