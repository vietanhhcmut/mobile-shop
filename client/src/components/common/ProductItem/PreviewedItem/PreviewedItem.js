import React, { Component } from 'react';
import './PreviewedItem.css';
import Modal from './../../utils/Modal/Modal';
import { formatPrice, calcDiscountPrice } from '../../../../constants/constants';

class PreviewedItem extends Component {
    state = {
        mainImg: this.props.item.imgs[0] || null
    }
    handleChangeImg = img => () => {
        this.setState({
            mainImg: img
        });
    }
    componentDidUpdate() {
        const { item } = this.props;
        if (this.state.mainImg) {
            const index = item.imgs.findIndex(img => this.state.mainImg === img);
            if (index === -1) {
                this.setState({
                    mainImg: item.imgs[0]
                });
            }
        }
    }
    render() {
        const { item } = this.props;
        const subImgs = item.imgs.map((img, index) => (
            <img src={img} key={index + img} alt="preview item" onClick={this.handleChangeImg(img)} />
        ));
        return (
            <Modal open={this.props.open} handleClose={this.props.handleClose} className="big">
                <div className="previewed-item">
                    <div className="previewed-item__imgs">
                        <div className="main-item-img">
                            <img src={this.state.mainImg} alt="preview item" />
                        </div>
                        <div className="sub-item-imgs">
                            {
                                subImgs
                            }
                        </div>
                    </div>
                    <div className="previewed-item-detail">
                        <h5>{item.name}</h5>
                        <div className="previewed-item-detail__price">
                            {formatPrice(calcDiscountPrice(item.price, item.saleoff))}
                            {
                                parseInt(item.saleoff) ?
                                    <span className="previewed-item-detail-saleoff">
                                        <span>{formatPrice(item.price)}</span>
                                        <span>Tiết kiệm {item.saleoff}</span>
                                    </span>
                                    :
                                    null
                            }
                        </div>
                        <p>Vận chuyển: Từ 1-5 ngày</p>
                        <p>{item.description}</p>
                        <div className="previewed-item-detail__variant">
                            <div className="variant-name">Màu</div>
                            <div className="variant-value">
                                {
                                    item.colors.map((color, index) => (
                                        <span style={{ backgroundColor: color.color }} key={index + color.color} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="previewed-item-detail__variant">
                            <div className="variant-name">Hãng sản xuất</div>
                            <div className="variant-value">
                                {item.category}
                            </div>
                        </div>
                        <div className="previewed-item-detail__variant">
                            <div className="variant-name">RAM</div>
                            <div className="variant-value">
                                {item.ram}
                            </div>
                        </div>
                        <div className="item-availability">
                            <i className="material-icons">
                                done_outline
                            </i>
                            Còn hàng
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default PreviewedItem;
