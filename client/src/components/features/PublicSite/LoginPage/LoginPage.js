import React, { Component } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  state = {
    showPassword: false,
    email: "",
    password: "",
    submitted: false
  };
  handleValidateForm = () => {
    return this.state.password.length > 0;
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      submitted: false
    });
  };

  handleShowPassword = () => {
    this.setState(prevState => {
      return {
        showPassword: !prevState.showPassword
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  };

  render() {
    const { email, password, submitted, showPassword } = this.state;
    let typePass = "password";
    let showPass = "Show";
    let loginError = false;
    if (email === "duyen@gmail.com" && password === "123") {
      loginError = true;
    }
    if (showPassword === true) {
      typePass = "text";
      showPass = "Hide";
    }
    return (
      <div className="login-page">
        <h2>Login</h2>
        <div className="login-page__content">
          <form
            name="form"
            onSubmit={this.handleSubmit}
            className="login-page__form"
          >
            <div
              className={
                "login__form" + (submitted && !email ? " has-error" : "")
              }
            >
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="login__form-inputemail"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <div className="clear" />
              {submitted &&
                !email && (
                  <div className="login__form-help">Email is required</div>
                )}
            </div>
            <div
              className={
                "login__form" + (submitted && !password ? " has-error" : "")
              }
            >
              <label htmlFor="password">Password</label>
              <input
                type={typePass}
                className="login__form-inputpassword"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <button
                onClick={this.handleShowPassword}
                type="button"
                className="login__form-input__show"
                disabled={!this.handleValidateForm()}
              >
                {showPass}
              </button>
              <div className="clear" />
              {submitted &&
                !password && (
                  <div className="login__form-help">Password is required</div>
                )}
            </div>
            <div className="login__form">
              <Link to="/password-recovery" className="login_form-forgot">
                Forgot your password?
              </Link>
            </div>
            <div className="login__form">
              <button className="login__form-input__submit" type="submit">
                SIGN IN
              </button>
            </div>
            {submitted &&
              !loginError && (
                <div className="login__form-help">
                  Email và password không hợp lệ!
                </div>
              )}
          </form>
          <div className="login-page__no-account">
            <Link to="/signup" className="no-account">
              No account? Create one here
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
