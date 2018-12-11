import React, { Component } from "react";
import "./Header.css";
import Menu from "./Menu/Menu";
import Navbar from "./NavBar/NavBar";
import { Link } from "react-router-dom";
import { logoSite, calcTotalQuantity } from "../../../constants/constants";
import Context from "../../../Context";
import axios from "../../../constants/axiosInstance";
import { withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    active: "",
    toggle: false,
    showMenu: false,
    categories: [],
    keyword: ''
  }
  componentDidMount() {
    this.setState({
      active: this.props.location.pathname
    });
    axios
      .get("/api/category/getAll.php")
      .then(res => {
        this.setState({ categories: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        active: this.props.location.pathname
      });
    }
  }

  handleToggle = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  handleActivePage = page => {
    this.setState({
      active: page
    });
  };

  handleShowMenu = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu
      };
    });
  };
  handleChangeSearch = (e) => {
    this.setState({ keyword: e.target.value });
  }
  handleEnterSearch = (e) => {
    if (e.keyCode === 13 || e.which === 13) this.handleSearch();
  }
  handleSearch = () => {
    const { keyword } = this.state;
    if (keyword === '') return;
    this.props.history.push('/search/' + keyword);
  }
  render() {
    const { active, toggle, showMenu, categories, keyword } = this.state;
    return (
      <header>
        <div className="logo">
          <Link to='/' className="logo__main-logo">
            <img src={logoSite} alt="not found" />
          </Link>
          <Link to="/cart">
            <div className="header-card-big">
              <span className="header-card-big__icon">
                <i className="material-icons add_shopping_cart">
                  shopping_cart
                </i>
              </span>

              <div className="hidden-sm-down">Giỏ hàng</div>
              <span className="header-card-big__cart-infor">
                <Context.Consumer>
                  {context => calcTotalQuantity(context.cart) + " sản phẩm"}
                </Context.Consumer>
              </span>
            </div>
          </Link>
        </div>

        <div className="search-big">
          <input
            className="search-big__text"
            type="text"
            placeholder="Tìm kiếm..."
            autoComplete="off"
            value={keyword}
            onChange={this.handleChangeSearch}
            onKeyPress={this.handleEnterSearch}
          />
          <i className="material-icons search-big__icon"
            onClick={this.handleSearch}>search</i>
        </div>
        <nav>
          <div className="navbar-big">
            <Navbar
              active={active}
              handleActivePage={this.handleActivePage}
              categories={this.state.categories}
            />
          </div>
          <div className="toggle" onClick={this.handleToggle}>
            <span className="toggle__icon">
              <i className="material-icons">menu</i>
            </span>
          </div>
          <Link to="/cart">
            <div className="header-card">
              <span className="header-card__icon">
                <i className="material-icons add_shopping_cart">
                  shopping_cart
                </i>
              </span>
              <span className="header-card__cart-infor">
                <Context.Consumer>
                  {context => calcTotalQuantity(context.cart) + " sản phẩm"}
                </Context.Consumer>
              </span>
            </div>
          </Link>

          <div className="search-big2">
            <div className="search-big2__input">
              <input
                className="search-big2__text"
                type="text"
                placeholder="Tìm kiếm..."
                autoComplete="off"
                value={keyword}
                onChange={this.handleChangeSearch}
                onKeyPress={this.handleEnterSearch}
              />
              <i className="material-icons search-big2__icon"
                onClick={this.handleSearch}>search</i>
            </div>
          </div>

          {toggle && (
            <Menu
              active={active}
              handleActivePage={this.handleActivePage}
              handleToggle={this.handleToggle}
              showMenu={showMenu}
              handleShowMenu={this.handleShowMenu}
              categories={categories}
            />
          )}
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
