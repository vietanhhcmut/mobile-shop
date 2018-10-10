import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => (
  <ul className="navbar-items">
    <li className="navbar-item">
      <Link to="/home" className="link">
        Home
      </Link>
    </li>

    <li className="navbar-item category">
      <span className="navbar-item__categories">
        Categories
        <i class="material-icons category__icon">arrow_drop_down</i>
      </span>

      <div className="table-categories">
        <div className="table-categories__item1">
          <li className="table-categories__header">Mobile</li>
          <ul className="table-categories__sub-item">
            <li>Table</li>
            <li>Blouses</li>
            <li>Officia Deserunt</li>
          </ul>
        </div>
        <div className="table-categories__item2">
          <li className="table-categories__header">Electronic</li>
          <ul>
            <li>Casual Dresses</li>
            <li>Evening Dresses</li>
            <li>Summer Dresses</li>
          </ul>
        </div>
        <div className="table-categories__item3">
          <img
            src="https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/leobootstrapmenu/1.jpg"
            width="200px"
            height="200px"
            alt="not found"
          />
        </div>
        <div className="table-categories__item4">
          enim ad minim veniam <span style={{ color: "red" }}>$3.99</span>{" "}
          aliquip ex
          <button className="table-categories__item4__button">
            deserunt mollist
          </button>
        </div>
      </div>
    </li>
    <li className="navbar-item">
      <Link to="/about-us" className="link">
        About us
      </Link>
    </li>
    <li className="navbar-item">
      <Link to="/login" className="link">
        Login
      </Link>
    </li>
    <li className="navbar-item">
      <Link to="/signup" className="link">
        Sign up
      </Link>
    </li>
  </ul>
);

export default Navbar;
