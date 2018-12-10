import React, { Component } from "react";
import './CMSProduct.css';
import { formatPrice, calcDiscountPrice } from './../../../../constants/constants';
import axios from '../../../../constants/axiosInstance';
import axiosValidate from '../../../../constants/axiosValidate';

import swal from 'sweetalert';
import NewProduct from './NewProduct';


export default class CMSProduct extends Component {
  state = {
    items: [],
    open: false,
    dataItem: [],
    category: '',
    categories: []
  }

  componentDidMount() {
    axios.get("/api/category/getAll.php")
      .then(res => {
        this.setState({
          categories: res.data,
          category: res.data[0].id
        });
      })
      .catch(err => {
        console.log(err);
      });
    axios.get("/api/product/getAll.php")
      .then(res => {
        this.setState({
          items: res.data
        });
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

  handleDelete = (id) => () => {
    swal({
      text: "Bạn có chắc bạn muốn xóa sản phẩm này?",
      icon: "warning",
      dangerMode: true,
      buttons: { cancel: true, confirm: true }
    }).then(isConfirm => {
      if (isConfirm) {
        axiosValidate().post("/api/product/delete.php",
          {
            id
          }
        )
          .then(res => {
            const items = this.state.items.filter(item => item.id !== id);
            this.setState({
              items
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  }

  handleChange = event => {
    this.setState({
      category: event.target.value
    });
  }

  handleEditValue = (newValue, _id) => {
    const items = [...this.state.items];

    const id = items.findIndex(cat => cat.id === _id);
    if (id >= 0) {
      items[id].name = newValue.name;
      items[id].price = newValue.price;
      items[id].saleoff = newValue.saleoff;
      console.log(items);
      this.setState({
        items
      });
    }
  }

  handlegetAll = (item) => {
    const items = [...this.state.items];
    items.push(item);
    this.setState({
      items
    });
  }
  render() {
    const { open, categories, category, items } = this.state;
    console.log(items);
    const listItem = items.map(item => (
      <div className="dashboard__product" key={item.id} >
        <img src={item.imgs[0]} alt="item" />
        <h5 className="dashboard__product-title">{item.name}</h5>
        <div className="dashboard__product-price">
          {formatPrice(calcDiscountPrice(item.price, item.saleoff))}
          {
            item.saleoff ?
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
                <option value={item.id} key={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="dashboard__content-grid">
            {listItem}
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
            editValue={this.handleEditValue}
            getAll={this.handlegetAll}
          />
        )}
      </div>
    );
  }
}
