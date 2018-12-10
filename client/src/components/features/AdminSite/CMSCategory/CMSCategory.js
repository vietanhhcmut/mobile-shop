import React, { Component } from "react";
import swal from 'sweetalert';
import axios from '../../../../constants/axiosInstance';
import NewCategory from './NewCategory';

export default class CMSUer extends Component {
  state = {
    categories: [],
    open: false,
    dataItem: [],
  }

  componentDidMount() {
    axios.get("/api/category/getAll.php")
      .then(res => {
        this.setState({
          categories: res.data
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
        axios.post("/api/category/delete.php",
          {
            id: item
          }
        )
          .then(res => {
            const categories = this.state.categories.filter(category => category.id !== item);
            this.setState({
              categories
            });
          })
          .catch(err => {
            console.log(err);
          });
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
  handleRenameCat = (newName, _id) => {
    const categories = [...this.state.categories];
    const id = categories.findIndex(cat => cat.id === _id);
    if (id >= 0) {
      categories[id].name = newName;
      this.setState({
        categories
      });
    }
  }
  handlegetAll = (item) => {
    const categories = [...this.state.categories];
    
    categories.push(item);
    console.log(categories);
    this.setState({
      categories
    });
  }

  render() {
    const { categories, open } = this.state;
    console.log(categories);
    let table = (
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Hành động</th>
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
          <h1>Danh mục</h1>
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
            renameCat={this.handleRenameCat}
            getAll={this.handlegetAll}
          />
        )}
      </div>
    );
  }
}
