import React, { Component } from "react";
import Modal from "react-modal";
import { formatPrice } from './../../../../constants/constants';

export default class NewProduct extends Component {
  state = {
    items: {
        city: "",
        createdAt: "",
        delivered: "",
        district: "",
        email: "",
        gender: "",
        id: "",
        name: "",
        paid: "",
        phonenumber: "",
        street: "",
        totalPrice: "",
        wards: ""
    }
  }
  componentDidMount() {
    if (this.props.itemInfo !== null) {
        this.setState({
          items: this.props.itemInfo,
        });
      }
  }
  
  render() {
    const {items} = this.state;
    return (
        <Modal isOpen={this.props.open} onRequestClose={this.props.onCloseModal} center className="CMSModal detailBill">
            <div className="modal-dialog">
                
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Đơn hàng</h5>
                    </div>

                    <div className="modal-body CMSModal__body">
                        <p>Mã đơn hàng: {items.id}</p>
                        <p>Khách hàng: {items.name}</p>
                        <p>Sản phẩm: Samsung</p>
                        <p>Giá tiền: {formatPrice(items.totalPrice)}</p>
                        <p>Tiền ship: {formatPrice(items.feeShip)}</p>
                        <p>Địa chỉ: {items.street + "," + items.wards + "," + items.district + "," + items.city}</p>
                        <p>Số điện thoại: {items.phonenumber}</p>
                        <p>Tình trạng đơn hàng: {items.delivered === "1"? "Đã giao":"Đang xử lý"}</p>
                    </div>
                    <button onClick={this.props.onCloseModal} className="closeModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
            </div>
            
        </Modal>
    );
  }
}
