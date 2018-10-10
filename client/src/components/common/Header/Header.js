import React, { Component } from "react";
import "./Header.css";
import Menu from "./Menu/Menu";
import Navbar from "./NavBar/NavBar";

export default class Header extends Component {
  state = {
    toggle: false,
    showMenu: false
  };
  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  handleShowMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
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
            autocomplete="off"
          />
          <i class="material-icons search-big__icon">search</i>
        </div>
        <nav>
          <div className="navbar-big">
            <Navbar />
          </div>
          <div className="toggle" onClick={this.handleToggle}>
            <span className="toggle__icon">
              <i class="material-icons">menu</i>
            </span>
          </div>
          <div className="search-big2">
            <input
              className="search-big2__text"
              type="text"
              placeholder="Search..."
              autocomplete="off"
            />
            <i class="material-icons search-big2__icon">search</i>
          </div>
          {this.state.toggle && (
            <Menu
              showMenu={this.state.showMenu}
              handleShowMenu={this.handleShowMenu}
            />
          )}
        </nav>
      </header>
    );
  }
}
