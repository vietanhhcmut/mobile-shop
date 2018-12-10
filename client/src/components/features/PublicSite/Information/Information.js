import React, { Component } from "react";
import axios from "../../../../constants/axiosInstance";
import axiosValidate from "../../../../constants/axiosValidate";

class InfoPage extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    gender: "nam",
    birthday: "",

    showModal: "",
    showPassword: false,
    idFirstName: "",
    idLastName: "",
    idEmail: "",
    idPass: "",
    validateEmail: ""
  };

  componentDidMount() {
    axiosValidate()
      .post("/api/user/getInfoUser.php")
      .then(res => {
        this.setState({
          id: res.data.id,
          firstName: res.data.firstname,
          lastName: res.data.lastname,
          email: res.data.email,
          gender: res.data.gender,
          birthday: res.data.birthday
        });
      })
      .catch(err => console.log(err));
  }

  handleShowPassword = () => {
    this.setState(prevState => {
      return {
        showPassword: !prevState.showPassword
      };
    });
  };

  handleUserInput = nameField => e => {
    const idField = nameField;
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
      [idField]: "",
      validateEmail: ""
    });
  };

  handleChangeGenderMale = () => {
    this.setState({
      gender: "nam"
    });
  };

  handleChangeGenderFemale = () => {
    this.setState({
      gender: "nu"
    });
  };

  getBirthday = e => {
    this.setState({
      birthday: e.target.value
    });
  };

  handleValidateForm = (firstName, lastName, email, pass, passOld) => {
    firstName === "" &&
      this.setState({
        idFirstName: "field-required"
      });

    lastName === "" &&
      this.setState({
        idLastName: "field-required"
      });

    email === "" &&
      this.setState({
        idEmail: "field-required"
      });

    if (email !== "") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        this.setState({
          validateEmail: "validate-email"
        });
      }
    }

    pass === "" &&
      this.setState({
        idPass: "field-required"
      });
  };

  handleUpdateUser = (firstName, lastName, email, pass) => {
    this.handleValidateForm(firstName, lastName, email, pass);
    if (firstName !== "" && lastName !== "" && email !== "" && pass !== "") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");
      if (
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      ) {
        // console.log({
        //   id: this.state.id,
        //   email: email,
        //   password: pass,
        //   gender: this.state.gender,
        //   birthday: this.state.birthday,
        //   lastname: lastName,
        //   firstname: firstName
        // });

        axiosValidate()
          .post("/api/user/update.php", {
            id: this.state.id,
            email: email,
            password: pass,
            gender: this.state.gender,
            birthday: this.state.birthday,
            lastname: lastName,
            firstname: firstName
          })
          .then(res => {
            console.log(res);
            this.props.history.push("/info");
          })
          .catch(err => {
            this.setState({
              showModal: "show-modal"
            });
          });
      }
    }
  };

  handleCloseModal = () => {
    this.setState({
      showModal: ""
    });
  };

  render() {
    const {
      showPassword,
      firstName,
      lastName,
      email,
      pass,
      showModal,
      idFirstName,
      idLastName,
      idEmail,
      idPass,
      validateEmail,
      gender,
      birthday
    } = this.state;
    return (
      <div>
        <section id="main">
          <div className="modal-body" id={showModal}>
            <p>Email đã được sử dụng.</p>
            <span className="close-modal" onClick={this.handleCloseModal}>
              x
            </span>
          </div>

          <header className="page-content">
            <h1>Thông tin cá nhân</h1>
          </header>
          <section className="page-content card card-block">
            <section className="page-content__register-form">
              <section>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label radio-choice">
                    Giới tính
                  </label>
                  <div className="col-md-6 form-control-valign">
                    <label className="radio-inline">
                      <span className="custom-radio">
                        <input
                          name="id_gender"
                          type="radio"
                          checked={gender === "nam" ? true : false}
                          onChange={this.handleChangeGenderMale}
                        />
                      </span>
                      Nam
                    </label>
                    <label className="radio-inline">
                      <span className="custom-radio second-radio">
                        <input
                          name="id_gender"
                          type="radio"
                          checked={gender === "nu" ? true : false}
                          onChange={this.handleChangeGenderFemale}
                        />
                      </span>
                      Nữ
                    </label>
                  </div>

                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Họ
                  </label>
                  <div className="col-md-6">
                    <input
                      name="firstName"
                      onChange={this.handleUserInput("idFirstName")}
                      className={"form-control " + idFirstName}
                      value={firstName}
                      type="text"
                    />
                    <div className={"field-hide" + idFirstName}>
                      Hãy nhập "Họ" của bạn
                    </div>
                  </div>
                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Tên
                  </label>
                  <div className="col-md-6">
                    <input
                      name="lastName"
                      className={"form-control " + idLastName}
                      onChange={this.handleUserInput("idLastName")}
                      value={lastName}
                      type="text"
                    />
                    <div className={"field-hide" + idLastName}>
                      Hãy nhập "Tên" của bạn
                    </div>
                  </div>
                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Email
                  </label>
                  <div className="col-md-6">
                    <input
                      name="email"
                      className={"form-control " + idEmail + validateEmail}
                      onChange={this.handleUserInput("idEmail")}
                      value={email}
                      type="email"
                    />
                    <div className={"field-hide" + idEmail}>
                      Hãy nhập "Email" của bạn
                    </div>
                    <div className={"field-hide" + validateEmail}>
                      Email của bạn không hợp lệ
                    </div>
                  </div>

                  <div className="col-md-3 form-control-comment" />
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Mật khẩu mới
                  </label>
                  <div className="col-md-6">
                    <div className="input-group js-parent-focus">
                      <input
                        name="pass"
                        className={"form-control " + idPass}
                        value={pass}
                        onChange={this.handleUserInput("idPass")}
                        type={showPassword ? "text" : "password"}
                      />
                      <span className="input-group-btn">
                        <button
                          onClick={this.handleShowPassword}
                          type="button"
                          className="input-group-btn show"
                        >
                          {showPassword ? "Ẩn" : "Hiện"}
                        </button>
                      </span>
                    </div>
                    <div className={"field-hide" + idPass}>
                      Hãy nhập "Mật khẩu mới" của bạn
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
                      type="date"
                      placeholder="MM/DD/YYYY"
                      value={birthday}
                      onChange={this.getBirthday}
                    />
                    <span className="form-control-comment" />
                  </div>
                </div>
              </section>
              <footer className="page-content__footer">
                <button
                  onClick={() =>
                    this.handleUpdateUser(firstName, lastName, email, pass)
                  }
                  className="button-save"
                  data-link-action="save-customer"
                  type="submit"
                >
                  Update
                </button>
              </footer>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default InfoPage;
