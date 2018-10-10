import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ showMenu, handleShowMenu }) => (
  <ul className="menu-items">
    <li className="menu-items1">
      <Link to="/home" className="link">
        Home
      </Link>
    </li>
    <li className="menu-items2" onClick={handleShowMenu}>
      <span className="menu-items2__text">Categories</span>
      <i class="material-icons menu-items2__icon">expand_more</i>
    </li>
    {showMenu && (
      <ul className="menu-item">
        <div className="menu-item__item1">
          <li className="menu-item__categories">Mobile</li>
          <ul className="item-categories1">
            <li>Table</li>
            <li>Blouses</li>
            <li>Officia Deserunt</li>
          </ul>
        </div>
        <div className="menu-item__item2">
          <li className="menu-item__categories item2">Electronic</li>
          <ul className="item-categories2">
            <li>Casual Dresses</li>
            <li>Evening Dresses</li>
            <li>Summer Dresses</li>
          </ul>
        </div>
        <div className="menu-items__image">
          <img
            className="menu-items__img"
            src="https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/leobootstrapmenu/1.jpg"
            width="180px"
            height="180px"
            alt="not found"
          />
        </div>
        <div className="menu-items__intro">
          enim ad minim veniam <span style={{ color: "red" }}>$3.99</span>{" "}
          aliquip ex
        </div>
        <div className="menu-items__button">
          <button>deserunt mollist</button>
        </div>
      </ul>
    )}
    <li className="menu-items3">
      <Link to="/about-us" className="link">
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
