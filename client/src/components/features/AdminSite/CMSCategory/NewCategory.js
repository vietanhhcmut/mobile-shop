import React, { Component } from "react";
import Modal from "react-modal";


export default class NewProduct extends Component {
  state = {
    items: {
        name: '',
        img: ''
    },
    _upload_files : '',
    imagePreviewUrl: ''
  }
  componentDidMount() {
    if (this.props.itemInfo !== null) {
        this.setState({
        //   items: this.props.itemInfo,
            items: {
                name: this.props.itemInfo.name,
                img: "https://demo4leotheme.com/prestashop/leo_mobile/27-large_default/printed-chiffon-dress.jpg"
            }
        });
      }
  }

  setStateInput = () => {
    this.setState({
        items: {
            name: '',
            img: ''
        },
        _upload_files: '',
        imagePreviewUrl: ''
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    if(this.state._upload_files !== ""){
        this.setState({
            items: {
                img: this.state._upload_files.name,
            }
        })
    }
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
  render() {
    const {items,imagePreviewUrl} = this.state;
    console.log(this.state);
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
                            <h5 className="modal-title">Category</h5>
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
                                    <img src={items.img} alt={items.name}/>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="form-group">
                                <input className="fileInput form-control" 
                                    type="file" 
                                    onChange={(e)=>this.handleImageChange(e)} />
                                <div className="imgPreview">
                                    {imagePreviewUrl && <div className="imgPreview__content">
                                        <img src={imagePreviewUrl} alt={items.name}/>
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
