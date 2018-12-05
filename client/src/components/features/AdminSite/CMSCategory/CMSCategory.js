import React, { Component } from "react";
import swal from 'sweetalert';
import { api } from './../../../../constants/constants';
import NewCategory from './NewCategory';

export default class CMSUer extends Component {
  state = {
    categories: [],
    open: false,
    dataItem: [],
  }
  
  componentDidMount() {
    api.getBrands()
      .then(categories => this.setState({ categories }));
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
    const {categories, open} = this.state;
    let table = (
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>

                <td className="btn-action-delete">
                    <a
                        className="btn btn-primary"
                        href="#"
                        onClick={this.onOpenModal(item)}
                    >
                        <i className="fa fa-lg fa-edit" />
                    </a>

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
          <h1>Category</h1>
        </div>
        <div className="dashboard__content">
            {table}
            <button
                type="button"
                className="dashboard__btn"
                onClick={this.onOpenModal(null)}
            >
                <i className="fa fa-lg fa-plus" />
            </button>
        </div>
        {open && (
          <NewCategory
            onCloseModal={this.onCloseModal}
            open={this.state.open}
            itemInfo={this.state.dataItem}
          />
        )}
      </div>
    );
  }
}
