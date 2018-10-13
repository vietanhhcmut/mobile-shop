import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";
class SignupPage extends Component {
  state = {
    showPassword: false,
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    showModal: "",
    idFirstName: "",
    idLastName: "",
    idEmail: "",
    idPass: "",
    validateEmail: "",
    status: 400
  };
  handleShowPassword = () => {
    this.setState(prevState => {
      return {
        showPassword: !prevState.showPassword
      };
    });
  };

  handleEnterFirstName = e => {
    this.setState({
      firstName: e.target.value,
      idFirstName: ""
    });
  };

  handleEnterLastName = e => {
    this.setState({
      lastName: e.target.value,
      idLastName: ""
    });
  };

  handleEnterEmail = e => {
    this.setState({
      email: e.target.value,
      idEmail: "",
      validateEmail: ""
    });
  };

  handleEnterPass = e => {
    this.setState({
      pass: e.target.value,
      idPass: ""
    });
  };

  handleValidateForm = () => {
    this.state.firstName === "" &&
      this.setState({
        idFirstName: "field-required"
      });

    this.state.lastName === "" &&
      this.setState({
        idLastName: "field-required"
      });

    this.state.email === "" &&
      this.setState({
        idEmail: "field-required"
      });

    if (this.state.email !== "") {
      let lastAtPos = this.state.email.lastIndexOf("@");
      let lastDotPos = this.state.email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          this.state.email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          this.state.email.length - lastDotPos > 2
        )
      ) {
        this.setState({
          validateEmail: "validate-email"
        });
      }
    }

    this.state.pass === "" &&
      this.setState({
        idPass: "field-required"
      });
  };

  handleCreateSuccess = () => {
    this.handleValidateForm();
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.email !== "" &&
      this.state.pass !== ""
    ) {
      let lastAtPos = this.state.email.lastIndexOf("@");
      let lastDotPos = this.state.email.lastIndexOf(".");
      if (
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        this.state.email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        this.state.email.length - lastDotPos > 2
      ) {
        this.state.status === 400
          ? this.setState({
              showModal: "show-modal"
            })
          : this.props.history.push("/login");
      }
    }
  };

  handleCloseModal = () => {
    this.setState({
      showModal: ""
    });
  };

  render() {
    let typePass = "password";
    let showPass = "Show";
    if (this.state.showPassword === true) {
      typePass = "text";
      showPass = "Hide";
    }
    return (
      <div>
        <section id="main">
          <div className="modal-body" id={this.state.showModal}>
            <p>Email đã được sử dụng.</p>
            <span className="close-modal" onClick={this.handleCloseModal}>
              x
            </span>
          </div>

          <header className="page-content">
            <h1>Tạo tài khoản</h1>
          </header>
          <section className="page-content card card-block">
            <section className="page-content__register-form">
              <p>
                Bạn đã sẵn sàng tạo tài khoản?
                <Link to="/login" className="login">
                  Hay bạn muốn Login
                </Link>
              </p>

              <section>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label radio-choice">
                    Giới tính
                  </label>
                  <div className="col-md-6 form-control-valign">
                    <label className="radio-inline">
                      <span className="custom-radio">
                        <input name="id_gender" type="radio" value="1" />
                      </span>
                      Nam
                    </label>
                    <label className="radio-inline">
                      <span className="custom-radio">
                        <input name="id_gender" type="radio" value="2" />
                      </span>
                      Nữ
                    </label>
                  </div>

                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Họ
                    <span className="required-enter">*</span>
                  </label>
                  <div className="col-md-6">
                    <input
                      onChange={this.handleEnterFirstName}
                      className={"form-control " + this.state.idFirstName}
                      value={this.state.firstName}
                      type="text"
                    />
                    <div className={"field-hide" + this.state.idFirstName}>
                      Hãy nhập "Họ" của bạn
                    </div>
                  </div>
                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Tên
                    <span className="required-enter">*</span>
                  </label>
                  <div className="col-md-6">
                    <input
                      className={"form-control " + this.state.idLastName}
                      onChange={this.handleEnterLastName}
                      value={this.state.lastName}
                      type="text"
                    />
                    <div className={"field-hide" + this.state.idLastName}>
                      Hãy nhập "Tên" của bạn
                    </div>
                  </div>
                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Email
                    <span className="required-enter">*</span>
                  </label>
                  <div className="col-md-6">
                    <input
                      className={
                        "form-control " +
                        this.state.idEmail +
                        this.state.validateEmail
                      }
                      onChange={this.handleEnterEmail}
                      value={this.state.email}
                      type="email"
                    />
                    <div className={"field-hide" + this.state.idEmail}>
                      Hãy nhập "Email" của bạn
                    </div>
                    <div className={"field-hide" + this.state.validateEmail}>
                      Email của bạn chưa đúng
                    </div>
                  </div>

                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Mật khẩu
                    <span className="required-enter">*</span>
                  </label>
                  <div className="col-md-6">
                    <div className="input-group js-parent-focus">
                      {/* {this.state.showPassword === false ? ( */}
                      <input
                        className={"form-control " + this.state.idPass}
                        value={this.state.pass}
                        onChange={this.handleEnterPass}
                        type={typePass}
                      />
                      <span className="input-group-btn">
                        <button
                          onClick={this.handleShowPassword}
                          type="button"
                          className="input-group-btn show"
                        >
                          {showPass}
                        </button>
                      </span>
                    </div>
                    <div className={"field-hide" + this.state.idPass}>
                      Hãy nhập "Mật khẩu" của bạn
                    </div>
                  </div>

                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label">
                    Ngày sinh
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="MM/DD/YYYY"
                    />
                    <span className="form-control-comment">
                      (E.g.: 05/31/1970)
                    </span>
                  </div>
                </div>
              </section>
              <footer>
                <button
                  onClick={this.handleCreateSuccess}
                  className="button-save"
                  data-link-action="save-customer"
                  type="submit"
                >
                  Save
                </button>
              </footer>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default SignupPage;
