import React, { Component } from "react";
import Modal from "react-modal";
import axios from '../../../../constants/axiosInstance';


export default class NewProduct extends Component {
    state = {
        items: {
            id: '',
            name: '',
            image: ''
        },
        _upload_files: '',
        imagePreviewUrl: ''
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

    setStateInput = () => {
        this.setState({
            items: {
                id: '',
                name: '',
                image: ''
            },
            _upload_files: '',
            imagePreviewUrl: ''
        });
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
        if (this.state._upload_files) {
            items.image = this.state.imagePreviewUrl;
            this.setStateInput();
        }
        this.props.itemInfo !== null ?
                            this.handleUpdate(items)
                            : this.handleCreate(items);
    }

    handleImageChange = e => {
        e.preventDefault();
        if (e.target.files.length > 0) {
            let file = e.target.files[0];
            this.setState({
                _upload_files: file,
                imagePreviewUrl: URL.createObjectURL(e.target.files[0])
            });
        }

    }
    handleDelteImg = () => {
        this.setState({
            _upload_files: '',
            imagePreviewUrl: ''
        })
    }

    handleUpdate = (data) => {
        axios.post("/api/category/edit.php", {
            id: data.id,
            name: data.name,
            image: data.image
        })
        .then(res => {
            this.props.renameCat(data.name, data.id);
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleCreate = (data) => {
        axios.post("/api/category/add.php", {
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
        const { items, imagePreviewUrl } = this.state;
        console.log(items);
        return (
            <Modal isOpen={this.props.open} onRequestClose={this.props.onCloseModal} center className="CMSModal">
                <div className="modal-dialog">
                    <form
                        onSubmit={e => {
                            this.handleSubmit(e);
                        }}
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
                                        {imagePreviewUrl && <div className="imgPreview__content">
                                            <img src={imagePreviewUrl} alt={items.name} />
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
