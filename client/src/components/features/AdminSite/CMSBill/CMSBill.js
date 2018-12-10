import React, { Component } from "react";
import swal from 'sweetalert';
import './CMSBill.css';
import DetailBill from './DetailBill';
import axios from '../../../../constants/axiosInstance';
import axiosValidate from '../../../../constants/axiosValidate';

export default class CMSUer extends Component {
  state = {
    orders: [],
    open: false,
    dataItem: [],
  }

  componentDidMount() {
    axios.get("/api/order/getAll.php")
      .then(res => {
        this.setState({
          orders: res.data
        });
      })
      .catch(err => {
        console.log(err);
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
        axiosValidate().post("/api/order/delete.php",
          {
            id: item
          }
        )
          .then(res => {
            const orders = this.state.orders.filter(order => order.id !== item);
            this.setState({
              orders
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  }
  changeType = (data, index) => () => {
    const state = Object.assign({}, this.state);
    state.orders[index].delivered = data.delivered === "0" ? "1" : "0";
    axiosValidate().post("/api/order/update.php", {
      id: data.id,
      delivered: data.delivered,
    })
      .then(res => {
        
      })
      .catch(err => {
        console.log(err);
      });

  }

  onOpenModal = (item) => () => {
    this.setState({
      open: !this.state.open,
      dataItem: item
    });
  }

  onCloseModal = () => {
    this.setState({ open: false });
  }

  render() {
    const { orders, open } = this.state;
    console.log(orders);
    let table = (
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã Đơn hàng</th>
            <th>Người mua</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>

              <td>{item.id}</td>

              <td>{item.name}</td>

              <td>
                <label class="switch">
                  <input type="checkbox" defaultChecked={item.delivered === "0" ? false : true} onClick={this.changeType(item, index)} />
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
