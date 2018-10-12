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
    showModal: ""
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
      firstName: e.target.value
    });
  };

  handleEnterLastName = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  handleEnterEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleEnterPass = e => {
    this.setState({
      pass: e.target.value
    });
  };

  handleCreateSuccess = () => {
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.email !== "" &&
      this.state.pass !== ""
    ) {
      this.setState({
        showModal: "show-modal"
      });
    }
  };

  handleCloseModal = () => {
    this.setState({
      showModal: ""
    });
  };

  render() {
    const a = "";
    return (
      <div>
        {this.state.showPassword ? a === "text" : a === "password"}
        <section id="main">
          <div className="modal-body" id={this.state.showModal}>
            <p>Create successfully</p>{" "}
            <span className="close-modal" onClick={this.handleCloseModal}>
              x
            </span>
          </div>
          <header className="page-content">
            <h1>Create an account</h1>
          </header>
          <section className="page-content card card-block">
            <section className="page-content__register-form">
              <p>
                Already have an account?
                <Link to="/login" className="login">
                  Log in instead!
                </Link>
              </p>
              <form> 
              <section>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label radio-choice">
                    Social title
                  </label>
                  <div className="col-md-6 form-control-valign">
                    <label className="radio-inline">
                      <span className="custom-radio">
                        <input name="id_gender" type="radio" value="1" />
                      </span>
                      Mr.
                    </label>
                    <label className="radio-inline">
                      <span className="custom-radio">
                        <input name="id_gender" type="radio" value="2" />
                      </span>
                      Mrs.
                    </label>
                  </div>

                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    First name
                  </label>
                  <div className="col-md-6">
                    <input
                      onChange={this.handleEnterFirstName}
                      className="form-control"
                      value={this.state.firstName}
                      type="text"
                      required
                    />
                  </div>
                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Last name
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      onChange={this.handleEnterLastName}
                      value={this.state.lastName}
                      type="text"
                      required
                    />
                  </div>
                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Email
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      onChange={this.handleEnterEmail}
                      value={this.state.email}
                      type="email"
                      required
                    />
                  </div>

                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Password
                  </label>
                  <div className="col-md-6">
                    <div className="input-group js-parent-focus">
                      {this.state.showPassword === false ? (
                        <input
                          className="form-control"
                          value={this.state.pass}
                          onChange={this.handleEnterPass}
                          type="password"
                          required
                        />
                      ) : (
                        <input
                          className="form-control"
                          value={this.state.pass}
                          onChange={this.handleEnterPass}
                          type="text"
                          required
                        />
                      )}

                      <span className="input-group-btn">
                        <button
                          onClick={this.handleShowPassword}
                          type="button"
                          className="input-group-btn show"
                        >
                          {this.state.showPassword === false ? "Show" : "Hide"}
                        </button>
                      </span>
                    </div>
                  </div>

                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label">
                    Birthdate
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

                  <div className="col-md-2 form-control-comment optional">
                    Optional
                  </div>
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label" />
                  <div className="col-md-6">
                    <span className="custom-checkbox">
                      <input name="optin" type="checkbox" value="1" />
                      <span> Receive offers from our partners</span>
                    </span>
                  </div>

                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label" />
                  <div className="col-md-6">
                    <span className="custom-checkbox">
                      <input name="newsletter" type="checkbox" value="1" />

                      <span> Sign up for our newsletter</span>

                      <br />
                      <em>
                        You may unsubscribe at any moment. For that purpose,
                        please find our contact info in the legal notice.
                      </em>
                    </span>
                  </div>

                  <div className="col-md-3 form-control-comment" />
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
              </form> 
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default SignupPage;
