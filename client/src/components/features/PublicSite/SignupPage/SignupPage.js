import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";
class SignupPage extends Component {
  render() {
    return (
      <div>
        <section id="main">
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
                  <div className="form-group row ">
                    <label className="col-md-3 form-control-label">
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
                        className="form-control"
                        name="firstname"
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
                        name="lastname"
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
                        name="email"
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
                        <input
                          className="form-control js-child-focus js-visible-password"
                          name="password"
                          type="password"
                          pattern=".{5,}"
                          required
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-outline"
                            type="button"
                            data-action="show-password"
                            data-text-show="Show"
                            data-text-hide="Hide"
                          >
                            Show
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
                        name="birthday"
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
