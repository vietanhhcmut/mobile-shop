import React, { Component } from "react";
import Modal from "react-modal";
import { formatPrice } from './../../../../constants/constants';

export default class NewProduct extends Component {
  state = {
    order: {
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
        wards: "",
        orderItems: []
    }
  }
  componentDidMount() {
    if (this.props.itemInfo !== null) {
        this.setState({
          order: this.props.itemInfo,
        });
      }
  }
  
  render() {
    const {order} = this.state;
    return (
        <Modal isOpen={this.props.open} onRequestClose={this.props.onCloseModal} center className="CMSModal detailBill">
            <div className="modal-dialog">
                
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Đơn hàng</h5>
                    </div>

                    <div className="modal-body CMSModal__body">
                        <p>Mã đơn hàng: {order.id}</p>
                        <p>Khách hàng: {order.name}</p>
                        <p>Tổng tiền: {formatPrice(order.totalPrice)}</p>
                        <p>Tiền ship: Miễn phí</p>
                        <p>Địa chỉ: {order.street + "," + order.wards + "," + order.district + "," + order.city}</p>
                        <p>Số điện thoại: {order.phonenumber}</p>
                        <p>Tình trạng thanh toán: {order.paid === "1"? "Đã thanh toán" : "Thanh toán khi nhận hàng"}</p>
                        <p>Tình trạng đơn hàng: {order.delivered === "1"? "Đã giao" : "Đang xử lý"}</p>
                        <p>Các sản phẩm:</p>
                        <table className='modal-body__products'>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Màu sắc</th>
                            </tr>
                            {order.orderItems.map(item => 
                                <tr key={item.id}>
                                    <td style={{textAlign: 'center'}}>{item.productId}</td>
                                    <td>{item.name}</td>
                                    <td style={{textAlign: 'center'}}>{item.quantity}</td>
                                    <td style={{textAlign: 'center'}}>{item.color}</td>
                                </tr>
                            )}
                        </table>
                    </div>
                    <button onClick={this.props.onCloseModal} className="closeModal">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                
            </div>
            
        </Modal>
    );
  }
}
