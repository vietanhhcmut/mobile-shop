import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = ({ categories }) => (
  <ul className="navbar-items">
    <li className="navbar-item">
      <Link to="/" className="link">
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
          {categories.map(category => (
            <div key={category.id}>{category.name}</div>
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
    <li className="navbar-item">
      <Link to="/about" className="link">
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
