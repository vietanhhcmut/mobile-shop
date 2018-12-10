import React, { Component } from "react";
import swal from 'sweetalert';
import axiosValidate from '../../../../constants/axiosValidate';
import axios from '../../../../constants/axiosInstance'

export default class CMSUer extends Component {
  state = {
    users: [],
  }
  componentDidMount() {
    axios.get("/api/user/getAll.php")
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDelete = (item) => () => {
    swal({
      text: "Bạn có chắc bạn muốn xóa người dùng này?",
      icon: "warning",
      dangerMode: true,
      buttons: { cancel: true, confirm: true }
    }).then(isConfirm => {
      if (isConfirm) {
        axiosValidate().post("/api/user/delete.php",
          {
            id: item
          }
        )
          .then(res => {
            const users = this.state.users.filter(user => user.id !== item);
            this.setState({
              users
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  }
  render() {
    const { users } = this.state;
    console.log(users);
    let table = (

      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.firstname} {item.lastname}</td>

              <td>{item.email}</td>

              <td className="btn-action-delete">
                <a
                  className="btn btn-danger"
                  href="#"
                  onClick={this.handleDelete(item.id)}
                >
                  <i className="fa fa-lg fa-trash" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    return (
      <div className="dashboard">
        <div className="dashboard__header">
          <h1>User</h1>
        </div>
        <div className="dashboard__content">
          {table}
        </div>
      </div>
    );
  }
}
