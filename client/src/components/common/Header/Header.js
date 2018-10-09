import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Menu = ({ handleShowCategories, handleOffCategories }) => (
  <div
    className="table-categories"
    onMouseOver={handleShowCategories}
    onMouseLeave={handleOffCategories}
  >
    <div className="table-categories__item1">
      <li className="table-categories__header">Mobile</li>
      <ul>
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
      {" "}
      enim ad minim veniam $3.99 aliquip ex
      <button className="button">deserunt mollist</button>
    </div>
  </div>
);

const Navbar = ({
  handleShowCategories,
  nameClass,
  handleShowCategoriesSmall,
  showCategoriesSmall
}) => (
  <ul className={nameClass}>
    <li className="header__link">
      <Link to="/home" className="link">
        Home
      </Link>
    </li>
    {nameClass === "header-big" ? (
      <Fragment>
        <li
          className="header__link arrow-category"
          onMouseOver={handleShowCategories}
          // onClick={handleShowCategoriesMiddle}
        >
          <span className="header__link-category">Categories</span>
          <i class="material-icons">arrow_drop_down</i>
        </li>
      </Fragment>
    ) : (
      <li
        className="header__link arrow-category"
        onClick={handleShowCategoriesSmall}
      >
        <span className="header__link-category">Categories</span>
        <i class="material-icons">expand_more</i>
      </li>
    )}

    {showCategoriesSmall && (
      <ul>
        <li className="item-categories ">Mobile</li>
        <ul className="item-categories">
          <li>Table</li>
          <li>Blouses</li>
          <li>Officia Deserunt</li>
        </ul>
        <li className="item-categories">Electronic</li>
        <ul className="item-categories">
          <li>Casual Dresses</li>
          <li>Evening Dresses</li>
          <li>Summer Dresses</li>
        </ul>
        <ul>
          <img
            className="item-categories__img"
            src="https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/leobootstrapmenu/1.jpg"
            width="200px"
            height="200px"
            alt="not found"
          />
        </ul>
        <div className="item-categories__intro">
          enim ad minim veniam $3.99 aliquip ex
        </div>
        <button className="button item-categories__button">
          deserunt mollist
        </button>
      </ul>
    )}
    <li className="header__link">
      <Link to="/about-us" className="link">
        About us
      </Link>
    </li>
    <li className="header__link">
      <Link to="/login" className="link">
        Login
      </Link>
    </li>
    <li className="header__link">
      <Link to="/signup" className="link">
        Sign up
      </Link>
    </li>
    {nameClass === "header-big" && (
      <div className="search-box">
        <form method="get">
          <input
            className="search"
            type="text"
            placeholder="Search..."
            autocomplete="off"
          />
          <i class="material-icons">search</i>
        </form>
      </div>
    )}
  </ul>
);

class Header extends Component {
  state = {
    toggle: false,
    showCategories: false,
    showCategoriesSmall: false
    // showCategoriesMiddle: false
  };
  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  handleShowCategories = () => {
    this.setState({ showCategories: true });
  };
  handleOffCategories = () => {
    this.setState({ showCategories: false });
  };

  handleShowCategoriesSmall = () => {
    this.setState({ showCategoriesSmall: !this.state.showCategoriesSmall });
  };

  render() {
    return (
      <header>
        <div className="logo">
          <img
            src="https://demo4leotheme.com/prestashop/leo_mobile/img/leo-mobile-logo-1491983441.jpg"
            alt="not found"
          />
        </div>
        <div className="search-big">
          <form method="get">
            <input
              className="search-text-big"
              type="text"
              placeholder="Search..."
              autocomplete="off"
            />
            <i class="material-icons">search</i>
          </form>
        </div>
        <nav>
          <div className="toggle" onClick={this.handleToggle}>
            <span className="toggle__icon">
              <i class="material-icons">menu</i>
            </span>
            <div className="search-box">
              <form method="get">
                <input
                  className="search"
                  type="text"
                  placeholder="Search..."
                  autocomplete="off"
                />
                <i class="material-icons">search</i>
              </form>
            </div>
          </div>
          <Navbar
            handleShowCategoriesMiddle={this.handleShowCategoriesMiddle}
            handleOffCategories={this.handleOffCategories}
            handleShowCategories={this.handleShowCategories}
            nameClass="header-big"
          />
          {this.state.toggle && (
            <Navbar
              handleOffCategories={this.handleOffCategories}
              handleShowCategories={this.handleShowCategories}
              handleShowCategoriesSmall={this.handleShowCategoriesSmall}
              showCategoriesSmall={this.state.showCategoriesSmall}
              nameClass="header-min"
            />
          )}
        </nav>
        {this.state.showCategories && (
          <Menu
            handleOffCategories={this.handleOffCategories}
            handleShowCategories={this.handleShowCategories}
          />
        )}
      </header>
    );
  }
}

export default Header;
