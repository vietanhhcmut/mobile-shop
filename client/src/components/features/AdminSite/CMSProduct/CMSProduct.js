import React, { Component } from "react";
import './CMSProduct.css';
import { api , formatPrice, calcDiscountPrice} from './../../../../constants/constants';
import swal from 'sweetalert';
import NewProduct from './NewProduct';


export default class CMSProduct extends Component {
  state = {
    items: [],
    open: false,
    dataItem: [],
    category: 'Samsung',
    categories: []
  }

  componentDidMount() {
    api.getProducts()
    .then(items => this.setState({ items }));
    api.getBrands()
      .then(categories => this.setState({ categories }));
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

  handleDelete = (item) => () => {
    swal({
      text: "Bạn có chắc bạn muốn xóa sản phẩm này?",
      icon: "warning",
      dangerMode: true,
      buttons: { cancel: true, confirm: true }
    }).then(isConfirm => {
      if (isConfirm) {
        console.log(item);
      }
    });
  }

  handleChange = event => {
    this.setState({
      category: event.target.value
    });
  };
  
  render() {
    const { open , categories, category} = this.state;
    
    const items = this.state.items.map(item => (
      <div className="dashboard__product" key={item.id} >
          <img src={item.imgs[0]} alt="item"/>
          <h5 className="dashboard__product-title">{item.name}</h5>
          <div className="dashboard__product-price">
            {formatPrice(calcDiscountPrice(item.price, item.saleoff))}
            {
                item.saleoff?
                <div className="dashboard__product-saleoff">
                    <span>{formatPrice(item.price)}</span>
                    <span>-{item.saleoff}</span>
                </div>
                :
                null
            }
          </div>
          <div className="dashboard__product-button">
            <button className="dashboard__product-button-edit" onClick={this.onOpenModal(item)}>
              <i className="fas fa-pencil-alt"></i>
            </button>
            <button className="dashboard__product-button-delete" onClick={this.handleDelete(item.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
      </div>
    ))
    return (
      <div className="dashboard">
        <div className="dashboard__header">
          <h1>Sản phẩm</h1>
        </div>
        <div className="dashboard__content">
          <div className="dashboard__content-filter">
              <select ref="catagory" onChange={this.handleChange} >
                {categories.map(item => (
                  <option value={item.name} key={item.id}>{item.name}</option>
                ))}
              </select>
          </div>
          <div className="dashboard__content-grid">
            {items}
            <div className="clear"></div>
          </div>
          
          <button
            type="button"
            className="dashboard__btn"
            onClick={this.onOpenModal(null)}
          >
            <i className="fa fa-lg fa-plus" />
          </button>
        </div>
        {open && (
          <NewProduct
            onCloseModal={this.onCloseModal}
            open={this.state.open}
            itemInfo={this.state.dataItem}
            category={category} 
          />
        )}
      </div>
    );
  }
}
