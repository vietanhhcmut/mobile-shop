import React, { Component } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import axios from "../../../../constants/axiosInstance";
import Context from "../../../../Context";

class LoginPage extends Component {
  static contextType = Context;
  state = {
    showPassword: false,
    email: "",
    password: "",
    submitted: false,
    err: true
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

  handleSubmit = (password, email) => e => {
    e.preventDefault();
    this.setState({
      submitted: true,
      err: true
    });
    if (password !== "" && email !== "") {
      axios
        .post("/api/user/login.php", {
          email,
          password
        })
        .then(res => {
          localStorage.setItem("userToken", res.data.token);
          this.context.handleGetCart();
          this.props.history.push("/");
        })
        .catch(err => {
          console.log("err", err);
          this.setState({
            err: false
          });
        });
    } else {
      console.log("err");
    }
  };

  render() {
    const { email, password, submitted, showPassword, err } = this.state;
    let typePass = "password";
    let showPass = "Hiện";

    let loginError = false;
    if (err) {
      loginError = true;
    }

    if (showPassword === true) {
      typePass = "text";
      showPass = "Ẩn";
    }
    return (
      <div className="login-page">
        <h2>Đăng nhập</h2>
        <div className="login-page__content">
          <form
            name="form"
            onSubmit={this.handleSubmit(password, email)}
            className="login-page__form"
          >
            <div
              className={
                "login__form" + (submitted && !email ? " has-error" : "")
              }
            >
              <label htmlFor="email">Email</label>
              <div className="login__form-inputemail">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {submitted &&
                  !email && (
                    <div className="login__form-help">Yêu cầu nhập email</div>
                  )}
              </div>

              <div className="clear" />
            </div>
            <div
              className={
                "login__form" + (submitted && !password ? " has-error" : "")
              }
            >
              <label htmlFor="password">Mật khẩu</label>
              <div className="login__form-inputpassword">
                <input
                  type={typePass}
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
                {submitted &&
                  !password && (
                    <div className="login__form-help">
                      Yêu cầu nhập mật khẩu
                    </div>
                  )}
              </div>
              <div className="clear" />
            </div>
            <div className="login__form">
              <button className="login__form-input__submit" type="submit">
                ĐĂNG NHẬP
              </button>
            </div>
            {submitted &&
              !loginError &&
              password &&
              email && (
                <div className="login__form-help email-pass">
                  Email và mật khẩu không hợp lệ!
                </div>
              )}
          </form>
          <div className="login-page__no-account">
            <Link to="/signup" className="no-account">
              Bạn chưa có tài khoản? Hãy tạo tài khoản mới nào!!!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
