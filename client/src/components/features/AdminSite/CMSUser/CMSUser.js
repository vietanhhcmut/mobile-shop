import React, { Component } from "react";
import swal from 'sweetalert';


export default class CMSUer extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    this.setState({
      users: [
        {
          id: "1",
          email: "abc@gmail.com",
          name: "duyen"
        },
        {
          id: "2",
          email: "abcd@gmail.com",
          name: "duyennguyen"
        }
      ]
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
        console.log(item);
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
              <td>{item.name}</td>

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
