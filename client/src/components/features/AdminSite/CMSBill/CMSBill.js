import React, { Component } from "react";
import swal from 'sweetalert';
import {formatPrice} from './../../../../constants/constants';
import './CMSBill.css';


export default class CMSUer extends Component {
  state = {
    orders: []
  }
  
  componentDidMount() {
    this.setState({
        orders: [
            {
                id: 1,
                feeShip: 30000,
                totalPrice: 100000,
                city: "Ho Chi Minh",
                district: "Thu Duc",
                ward: "Linh Trung",
                address: "KTX Khu A",
                phonenumber: "0123456789",
                type: "approved"
            },
            {
                id: 2,
                feeShip: 30000,
                totalPrice: 100000,
                city: "Ho Chi Minh",
                district: "Thu Duc",
                ward: "Linh Trung",
                address: "KTX Khu A",
                phonenumber: "0123456789",
                type: "pending"
            }
        ],
    });
  }

  handleDelete = (item) => () => {
    swal({
      text: "Bạn có chắc bạn muốn xóa đơn hàng này?",
      icon: "warning",
      dangerMode: true,
      buttons: { cancel: true, confirm: true }
    }).then(isConfirm => {
      if (isConfirm) {
        console.log(item);
      }
    });
  }
  changeType = (item, index) => () => {
      this.setState({

      })
  }
  render() {
    const {orders} = this.state;
    let table = (
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã Đơn hàng</th>
              <th>Người mua</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>{item.id}</td>

                <td>Duyen</td>
                
                <td>
                    {/* <label>
                        <input type='checkbox'  onClick={() => this.changeActive(item, index)} /><span className='button-indecator' />
                    </label> */}
                    <label class="switch">
                        <input type="checkbox" checked />
                        <span class="slider round"></span>
                    </label>
                </td>
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
