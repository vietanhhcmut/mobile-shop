import React, { Component } from "react";
import axiosValidate from "../../../../constants/axiosValidate";

class InfoPage extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    gender: true,
    birthday: "",
    passOld: "",

    showModal: "",
    showPassword: false,
    showPasswordOld: false,
    idFirstName: "",
    idLastName: "",
    idEmail: "",
    idPass: "",
    idPassOld: "",
    validateEmail: ""
  };

  componentDidMount() {
    axiosValidate()
      .get("/api/user/getInfoUser.php")
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

  
  handleShowPassword = typePass => () => {
    this.setState(prevState => ({
      [typePass]: !prevState[typePass]
    }));
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

  handleChangeGender = gender => () => {
    this.setState({
      gender
    });
  };


  getBirthday = e => {
    this.setState({
      birthday: e.target.value
    });
  };

  handleValidateForm = (firstName, lastName, email, pass, passOld) => {
    let check = false;
    if (firstName === "") {
      this.setState({
        idFirstName: "field-required"
      });
      check = true;
    }

    if (lastName === "") {
      this.setState({
        idLastName: "field-required",
        err: true
      });
      check = true;
    }

    if (email === "") {
      this.setState({
        idEmail: "field-required",
        err: true
      });
      check = true;
    }

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
        check = true;
      }
    }
    if (pass !== "" || passOld !== "") {
      if (pass === "") {
        this.setState({
          idPass: "field-required"
        });
        check = true;
      }
      if (passOld === "") {
        this.setState({
          idPass: "field-required"
        });
        check = true;
      }
    }

    if (check === true) {
      // co loi
      return false;
    } else return true;
  };


  handleUpdateUser = (firstName, lastName, email, pass, passOld) => {
    const checkInfo = this.handleValidateForm(
      firstName,
      lastName,
      email,
      pass,
      passOld
    );
    if (checkInfo) {
      axiosValidate()
        .post("/api/user/update.php", {
          id: this.state.id,
          email: email,
          password: pass.trim(),
          gender: this.state.gender,
          birthday: this.state.birthday,
          lastname: lastName,
          firstname: firstName,
          passOld: passOld
        })
        .then(res => {
          this.props.history.push("/info");
          this.setState({
            showModal: "show-modal-success"
          });
        })
        .catch(err => {
          this.setState({
            showModal: "show-modal"
          });
        });
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
      birthday,
      idPassOld,
      passOld,
      showPasswordOld
    } = this.state;
    return (
      <div>
        <section id="main">
          <div
            className="modal-body"
            id={showModal === "show-modal" ? "show-modal" : ""}
          >
            <p>Password cũ bạn nhập chưa đúng.</p>
            <span className="close-modal" onClick={this.handleCloseModal}>
              x
            </span>
          </div>

          <div
            className="modal-body-success"
            id={showModal === "show-modal-success" ? "show-modal-success" : ""}
          >
            <p>Sửa thông tin thành công!</p>
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
                          checked={gender}
                          onChange={this.handleChangeGender(true)}
                        />
                      </span>
                      Nam
                    </label>
                    <label className="radio-inline">
                      <span className="custom-radio second-radio">
                        <input
                          name="id_gender"
                          type="radio"
                          checked={!gender}
                          onChange={this.handleChangeGender(false)}
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
                      disabled
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
                    Mật khẩu cũ
                  </label>
                  <div className="col-md-6">
                    <div className="input-group js-parent-focus">
                      <input
                        name="passOld"
                        className={"form-control " + idPassOld}
                        value={passOld}
                        onChange={this.handleUserInput("idPassOld")}
                        type={showPasswordOld ? "text" : "password"}
                      />
                      <span className="input-group-btn">
                        <button
                          onClick={this.handleShowPassword("showPasswordOld")}
                          type="button"
                          className="input-group-btn show"
                        >
                          {showPasswordOld ? "Ẩn" : "Hiện"}
                        </button>
                      </span>
                    </div>
                    <div className={"field-hide" + idPassOld}>
                      Hãy nhập "Mật khẩu cũ" của bạn
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
                          onClick={this.handleShowPassword("showPassword")}
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
                    this.handleUpdateUser(
                      firstName,
                      lastName,
                      email,
                      pass,
                      passOld
                    )
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
