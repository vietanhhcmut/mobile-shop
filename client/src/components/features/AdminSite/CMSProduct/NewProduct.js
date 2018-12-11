import React, { Component } from "react";
import Modal from "react-modal";
import './NewProduct.css';
import axiosValidate from '../../../../constants/axiosValidate';

export default class NewProduct extends Component {
    state = {
        items: {
            id: '',
            name: '',
            categoryId: '',
            color: [],
            price: '',
            saleoff: '',
            description: '',
            screen: '',
            sim: '',
            memory: '',
            ram: '',
            bluetooth: '',
            wlan: '',
            gps: '',
            pin: '',
            camera: '',
            os: '',
            imgs: []
        },
        _upload_files: [],
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
                id: '',
                name: '',
                categoryId: '',
                color: [],
                price: '',
                saleoff: '',
                description: '',
                screen: '',
                sim: '',
                memory: '',
                ram: '',
                bluetooth: '',
                wlan: '',
                gps: '',
                pin: '',
                camera: '',
                os: '',
                imgs: [],
            }
        });
    }

    // handleChange = (event, namefile => {
    //     this.setState({
    //         items: {
    //             [event.target.name]: event.target.value
    //         }
    //     });
    // };
    handleUserInput = nameField => e => {
        this.setState({
            items: {
                id: this.state.items.id,
                name: nameField === "name" ? e.target.value : this.state.items.name,
                categoryId: this.props.category,
                price: nameField === "price" ? e.target.value : this.state.items.price,
                saleoff: nameField === "saleoff" ? e.target.value : this.state.items.saleoff,
                description: nameField === "description" ? e.target.value : this.state.items.description,
                screen: nameField === "screen" ? e.target.value : this.state.items.screen,
                sim: nameField === "sim" ? e.target.value : this.state.items.sim,
                memory: nameField === "memory" ? e.target.value : this.state.items.memory,
                ram: nameField === "ram" ? e.target.value : this.state.items.ram,
                bluetooth: nameField === "bluetooth" ? e.target.value : this.state.items.bluetooth,
                wlan: nameField === "wlan" ? e.target.value : this.state.items.wlan,
                gps: nameField === "gps" ? e.target.value : this.state.items.gps,
                pin: nameField === "pin" ? e.target.value : this.state.items.pin,
                camera: nameField === "camera" ? e.target.value : this.state.items.camera,
                os: nameField === "os" ? e.target.value : this.state.items.os,
                imgs: this.state.items.imgs,
                color: this.state.items.color
            }
        });
      };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onCloseModal();
        const items = { ...this.state.items };
        if (this.state._upload_files.length > 0) {
            items.imgs = [];
            for (var i = 0; i < this.state._upload_files.length; i++) {
                items.imgs.push(this.state._upload_files[i].name);
            }
            // this.setStateInput();
            console.log(items);
        }
        
        {
            this.props.itemInfo !== null
                ? this.handleUpdate(items)
                : this.handleCreate(items);
        }

    }

    handleUpdate = (data) => {
        axiosValidate().post("/api/product/update.php", {
            id: data.id,
            name: data.name,
            categoryId: this.props.category,
            price: data.price,
            saleoff: data.saleoff,
            description: data.description,
            screen: data.screen,
            sim: data.sim,
            memory: data.memory,
            ram: data.ram,
            bluetooth: data.bluetooth,
            wlan: data.wlan,
            gps: data.gps,
            pin: data.pin,
            camera: data.camera,
            os: data.os
        })
            .then(res => {
                this.props.editValue(data, data.id);
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleCreate = (data) => {
        axiosValidate().post("/api/product/add.php", {
            name: data.name,
            categoryId: this.props.category,
            price: data.price,
            saleoff: data.saleoff,
            description: data.description,
            screen: data.screen,
            sim: data.sim,
            memory: data.memory,
            ram: data.ram,
            bluetooth: data.bluetooth,
            wlan: data.wlan,
            gps: data.gps,
            pin: data.pin,
            camera: data.camera,
            os: data.os
        })
            .then(res => {
                this.props.getAll(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleImageChange = e => {
        e.preventDefault();
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
        if (this.state._upload_files.length === 0) {
            this.setState({
                imagePreviewUrl: []
            });
        }
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
                                        onChange={this.handleUserInput("name")}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ảnh</label>
                                    <div className="img__infoProduct">
                                        {items.imgs.map((item, index) => (
                                            <img src={item} alt={items.name} key={index} />
                                        ))}
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="form-group">
                                    <input className="fileInput form-control"
                                        type="file"
                                        onChange={(e) => this.handleImageChange(e)}
                                        multiple />
                                    <div className="imgPreview">
                                        {imagePreviewUrl && imagePreviewUrl.map((item, index) => (
                                            <div className="imgPreview__content">
                                                <img src={item} alt={items.name} />
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
                                        onChange={this.handleUserInput("price")}
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
                                        onChange={this.handleUserInput("saleoff")}
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
                                        onChange={this.handleUserInput("description")}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Screen</label>
                                    <input
                                        required
                                        className="form-control"
                                        id="screen"
                                        type="text"
                                        placeholder="screen"
                                        value={items.screen}
                                        onChange={this.handleUserInput("screen")}
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
                                        onChange={this.handleUserInput("sim")}
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
                                        onChange={this.handleUserInput("memory")}
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
                                        onChange={this.handleUserInput("ram")}
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
                                        onChange={this.handleUserInput("bluetooth")}
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
                                        onChange={this.handleUserInput("wlan")}
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
                                        onChange={this.handleUserInput("gps")}
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
                                        onChange={this.handleUserInput("pin")}
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
                                        onChange={this.handleUserInput("camera")}
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
                                        onChange={this.handleUserInput("os")}
                                    />
                                </div>
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
