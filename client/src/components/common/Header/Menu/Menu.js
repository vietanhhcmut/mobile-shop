import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ showMenu, handleShowMenu, categories }) => (
  <ul className="menu-items">
    <li className="menu-items1">
      <Link to="/" className="link">
        Home
      </Link>
    </li>
    <li className="menu-items2" onClick={handleShowMenu}>
      <span className="menu-items2__text">Categories</span>
      <i class="material-icons menu-items2__icon">expand_more</i>
    </li>
    {showMenu && (
      <div className="menu-item">
        <div className="menu-item__item1">
          {categories.map(category => (
            <div key={category.id}>{category.name}</div>
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
    <li className="menu-items3">
      <Link to="/about" className="link">
        About us
      </Link>
    </li>
    <li className="menu-items4">
      <Link to="/login" className="link">
        Login
      </Link>
    </li>
    <li className="menu-items5">
      <Link to="/signup" className="link">
        Sign up
      </Link>
    </li>
  </ul>
);
export default Menu;
