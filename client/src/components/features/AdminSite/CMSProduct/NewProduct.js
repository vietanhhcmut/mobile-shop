import React, { Component } from "react";
import Modal from "react-modal";
import './NewProduct.css';

export default class NewProduct extends Component {
  state = {
    items: {
        name: '',
        imgs: []
    },
    _upload_files : [],
    imagePreviewUrl: []
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
        items: {
            name: '',
            imgs: []
        }
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const state = Object.assign({}, this.state);
    if(this.state._upload_files.length > 0) {
        state.items.imgs = [];
        for(var i = 0; i < this.state._upload_files.length; i++){
            state.items.imgs.push(this.state._upload_files[i].name);
        }
    }
  }
  handleImageChange = e => {
    e.preventDefault();
    for(let i = 0; i < e.target.files.length; i++){
       
        var isExist = false;
        for (let k = 0; k < this.state._upload_files.length; k++) { // Check file exist
            if (e.target.files[i].size === this.state._upload_files[k].size &&
                e.target.files[i].name === this.state._upload_files[k].name &&
                e.target.files[i].lastModified === this.state._upload_files[k].lastModified) {
                isExist = true;
            }
        }
        if (!isExist) {
            this.state._upload_files.push(e.target.files[i]);
            this.state.imagePreviewUrl.push(URL.createObjectURL(e.target.files[i]));
            this.setState({
                imagePreviewUrl: this.state.imagePreviewUrl
            });
            
        }
    }
}
handleDelteImg = (index) => () => {
    this.state._upload_files.splice(index, 1);
    const state = Object.assign({}, this.state);
    state.imagePreviewUrl = [];
    for (let k = 0; k < this.state._upload_files.length; k++) { // Check file exist
        this.state.imagePreviewUrl.push(URL.createObjectURL(this.state._upload_files[k]));
        this.setState({
            imagePreviewUrl: this.state.imagePreviewUrl
        });
    }
    if(this.state._upload_files.length === 0) {
        this.setState({
            imagePreviewUrl: []
        });
    }
}
  render() {
      console.log(this.state.items);
    const {items, imagePreviewUrl} = this.state;
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
                                <label>Ảnh</label>
                                <div className="img__infoProduct">
                                    {items.imgs.map((item, index) =>(
                                        <img src={item} alt={items.name} key={index}/>
                                    ))}
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="form-group">
                                <input className="fileInput form-control" 
                                    type="file" 
                                    onChange={(e)=>this.handleImageChange(e)} 
                                    multiple />
                                <div className="imgPreview">
                                    {imagePreviewUrl && imagePreviewUrl.map((item,index)=>(
                                        <div className="imgPreview__content">
                                            <img src={item} alt={items.name}/>
                                            <span className="delete-imagePreview" onClick={this.handleDelteImg(index)}><i className="fas fa-times"></i></span>
                                        </div>
                                    ))}
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
                            {/* <div className="form-group">
                                <label>Screen</label>
                                <input
                                    required
                                    className="form-control"
                                    id="screen"
                                    type="text"
                                    placeholder="screen"
                                    value={items.screen}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Sim</label>
                                <input
                                    required
                                    className="form-control"
                                    id="sim"
                                    type="text"
                                    placeholder="sim"
                                    value={items.sim}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Memory</label>
                                <input
                                    required
                                    className="form-control"
                                    id="memory"
                                    type="text"
                                    placeholder="memory"
                                    value={items.memory}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Ram</label>
                                <input
                                    required
                                    className="form-control"
                                    id="ram"
                                    type="text"
                                    placeholder="ram"
                                    value={items.ram}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Bluetooth</label>
                                <input
                                    required
                                    className="form-control"
                                    id="bluetooth"
                                    type="text"
                                    placeholder="bluetooth"
                                    value={items.bluetooth}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Wlan</label>
                                <input
                                    required
                                    className="form-control"
                                    id="wlan"
                                    type="text"
                                    placeholder="wlan"
                                    value={items.wlan}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>GPS</label>
                                <input
                                    required
                                    className="form-control"
                                    id="gps"
                                    type="text"
                                    placeholder="gps"
                                    value={items.gps}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Pin</label>
                                <input
                                    required
                                    className="form-control"
                                    id="pin"
                                    type="text"
                                    placeholder="pin"
                                    value={items.pin}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Camera</label>
                                <input
                                    required
                                    className="form-control"
                                    id="camera"
                                    type="text"
                                    placeholder="camera"
                                    value={items.camera}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Os</label>
                                <input
                                    required
                                    className="form-control"
                                    id="os"
                                    type="text"
                                    placeholder="os"
                                    value={items.os}
                                    onChange={this.handleChange}
                                />
                            </div> */}
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">
                            {this.props.itemInfo === null ? "Save" : "Update"}
                            </button>
                        </div>
                        <button onClick={this.props.onCloseModal} className="closeModal">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </form>
            </div>
            
        </Modal>
    );
  }
}
