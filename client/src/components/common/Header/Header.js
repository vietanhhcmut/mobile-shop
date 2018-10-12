import React, { Component } from "react";
import "./Header.css";
import Menu from "./Menu/Menu";
import Navbar from "./NavBar/NavBar";

export default class Header extends Component {
  state = {
    toggle: false,
    showMenu: false,
    categories: [
      {
        id: "1",
        name: "Sam Sung"
      },
      {
        id: "2",
        name: "Nokia"
      },
      {
        id: "3",
        name: "Apple"
      },
      {
        id: "4",
        name: "LG"
      },
      {
        id: "5",
        name: "TCL Communication"
      },
      {
        id: "6",
        name: "Sony Mobile"
      }
    ]
  };
  handleToggle = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };
  handleShowMenu = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu
      };
    });
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
          <input
            className="search-big__text"
            type="text"
            placeholder="Search..."
            autoComplete="off"
          />
          <i className="material-icons search-big__icon">search</i>
        </div>
        <nav>
          <div className="navbar-big">
            <Navbar categories={this.state.categories} />
          </div>
          <div className="toggle" onClick={this.handleToggle}>
            <span className="toggle__icon">
              <i className="material-icons">menu</i>
            </span>
            {/* <div class="header">
              <i class="fa fa-shopping-cart" />
              <span class="hidden-sm-down">Shopping Cart</span>

              <span class="cart-infor">
                <span class="cart-products-count">0</span>

                <span class="cart-text">Item</span>
                <span class="cart-total">- $0.00</span>
              </span>
            </div> */}
          </div>

          <div className="search-big2">
            <div className="search-big2__input">
              <input
                className="search-big2__text"
                type="text"
                placeholder="Search..."
                autoComplete="off"
              />
              <i className="material-icons search-big2__icon">search</i>
            </div>
          </div>

          {this.state.toggle && (
            <Menu
              showMenu={this.state.showMenu}
              handleShowMenu={this.handleShowMenu}
              categories={this.state.categories}
            />
          )}
        </nav>
      </header>
    );
  }
}
