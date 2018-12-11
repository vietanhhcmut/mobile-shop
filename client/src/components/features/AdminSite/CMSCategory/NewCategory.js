import React, { Component } from "react";
import Modal from "react-modal";
import axiosValidate from '../../../../constants/axiosValidate';

export default class NewProduct extends Component {
    state = {
        items: {
            id: '',
            name: '',
            image: ''
        },
        _upload_files: [],
        imageUrl: [],
        imagePreviewUrl: []
    }
    componentDidMount = () => {
        if (this.props.itemInfo !== null) {
            this.setState({
                items: {
                    id: this.props.itemInfo.id,
                    name: this.props.itemInfo.name,
                    image: this.props.itemInfo.image
                }
            });
        }
    }

   
    handleChange = event => {
        this.setState({
            items: {
                id: this.state.items.id,
                name: event.target.value,
                image: this.state.items.image
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onCloseModal();
        const items = { ...this.state.items };
        if (this.state._upload_files.length > 0) {
            items.image = this.state.imageUrl;
        }
        // console.log(items.image);
        this.setState({
            items
        })
        this.props.itemInfo !== null ?
                            this.handleUpdate(items)
                            : this.handleCreate(items);
    }

    handleImageChange = e => {
        e.preventDefault();
        var base64data = [];
        
        for (let i = 0; i < e.target.files.length; i++) {

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
                var reader = new FileReader();
                
                reader.onloadend = function(e) {
                    base64data.push(e.target.result);
                }
                reader.readAsDataURL(e.target.files[i]); 
                this.state.imageUrl = base64data;
                this.setState({
                    imageUrl: this.state.imageUrl,
                    imagePreviewUrl: this.state.imagePreviewUrl
                });
                
            }
        }
        
    }
    handleDelteImg = () => {
        this.state._upload_files = [];
        const state = Object.assign({}, this.state);
        state.imageUrl = [];
        state.imagePreviewUrl = [];
        
        this.setState({
            _upload_files: [],
            imagePreviewUrl: []
        })
        
    }

    handleUpdate = (data) => {
        axiosValidate().post("/api/category/edit.php", {
            id: data.id,
            name: data.name,
            image: data.image
        })
        .then(res => {
            this.props.renameCat(data, data.id);
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleCreate = (data) => {
        axiosValidate().post("/api/category/add.php", {
            name: data.name,
            image: data.image
        })
        .then(res => {
            this.props.getAll(data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        const { items,imagePreviewUrl } = this.state;
        console.log(this.state._upload_files);
        return (
            <Modal isOpen={this.props.open} onRequestClose={this.props.onCloseModal} center className="CMSModal">
                <div className="modal-dialog">
                    <form
                        onSubmit={e => {
                            this.handleSubmit(e);
                        }}
                        enctype="multipart/form-data"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Danh mục</h5>
                            </div>

                            <div className="modal-body CMSModal__body">
                                <div className="form-group">
                                    <label>Tên</label>
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
                                        <img src={items.image} alt={items.name} />
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="form-group">
                                    <input className="fileInput form-control"
                                        type="file"
                                        onChange={(e) => this.handleImageChange(e)} />
                                    <div className="imgPreview">
                                        {imagePreviewUrl.length > 0 && 
                                        <div className="imgPreview__content">
                                            <img src={imagePreviewUrl[0]} alt={items.name} />
                                            <span className="delete-imagePreview" onClick={this.handleDelteImg}><i class="fas fa-times"></i></span>
                                        </div>}
                                    </div>
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
