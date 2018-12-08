import React, { Component } from "react";
import swal from 'sweetalert';
import './CMSBill.css';
import DetailBill from './DetailBill';


export default class CMSUer extends Component {
  state = {
    orders: [],
    open: false,
    dataItem: [],
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
          type: true
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
          type: false
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
    const state = Object.assign({}, this.state);
    state.orders[index].type = !item.type;
    this.setState(state);
  }

  onOpenModal = (item) => () => {
    this.setState({
      open: !this.state.open,
      dataItem: item
    });
    console.log(item);
  }

  onCloseModal = () => {
    this.setState({ open: false });
  }

  render() {
    const { orders, open } = this.state;
    let table = (
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã Đơn hàng</th>
            <th>Người mua</th>
            <th>Type</th>
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
                <label class="switch">
                  <input type="checkbox" defaultChecked={item.type} onClick={this.changeType(item, index)} />
                  <span class="slider round"></span>
                </label>
              </td>
              <td className="btn-action-delete">
                <a
                  className="btn btn-primary"
                  href="#!"
                  onClick={this.onOpenModal(item)}
                >
                  <i class="fas fa-eye"></i>
                </a>

                <a
                  className="btn btn-danger"
                  href="#!"
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
          <h1>Đơn hàng</h1>
        </div>
        <div className="dashboard__content">
          {table}
        </div>
        {open && (
          <DetailBill
            onCloseModal={this.onCloseModal}
            open={this.state.open}
            itemInfo={this.state.dataItem}
          />
        )}
      </div>
    );
  }
}
