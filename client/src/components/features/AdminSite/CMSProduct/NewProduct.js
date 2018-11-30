import React, { Component } from "react";
import Modal from "react-modal";
import './NewProduct.css';

export default class NewProduct extends Component {
  state = {
    items: [],
    file: '',
    imagePreviewUrl: ''
  }
  componentDidMount() {
    if (this.props.itemInfo !== null) {
        this.setState({
          items: this.props.itemInfo,
        });
      }
  }

  setStateInput = () => {
    this.setState({
      items: []
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.state.items.imgs.push(this.state.file.name);
    // console.log('handle uploading-', this.state.file);
    // console.log(this.state.items);
  }
  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
}
  render() {
    const {items} = this.state;
    console.log(items);
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } 
    return (
        <Modal isOpen={this.props.open} onRequestClose={this.props.onCloseModal} center className="CMSModal">
            <div className="modal-dialog">
                <form
                    onSubmit={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleSubmit(e);
                    // {
                    //     this.props.itemInfo !== null
                    //     ? this.props.onUpdatePage(this.state.dataPage)
                    //     : this.props.onCreatePage(this.state.dataPage);
                    // }
                    
                    this.props.onCloseModal();
                    this.setStateInput();
                    }}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.category}</h5>
                        </div>

                        <div className="modal-body CMSModal__body">
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    required
                                    className="form-control"
                                    id="name"
                                    type="text"
                                    placeholder="name"
                                    value={items.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input className="fileInput form-control" 
                                    type="file" 
                                    onChange={(e)=>this.handleImageChange(e)} />
                                <div className="imgPreview">
                                    {$imagePreview}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    required
                                    className="form-control"
                                    id="price"
                                    type="text"
                                    placeholder="price"
                                    value={items.price}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Discount</label>
                                <input
                                    required
                                    className="form-control"
                                    id="discount"
                                    type="text"
                                    placeholder="discount"
                                    value={items.saleoff}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    required
                                    className="form-control"
                                    id="description"
                                    type="text"
                                    placeholder="description"
                                    rows="5"
                                    value={items.description}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">
                            {this.props.itemInfo === null ? "Save" : "Update"}
                            </button>
                        </div>
                        <button onClick={this.props.onCloseModal} className="closeModal">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </form>
            </div>
            
        </Modal>
    );
  }
}
