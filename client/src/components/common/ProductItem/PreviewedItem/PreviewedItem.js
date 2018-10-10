import React, { Component } from 'react';
import './PreviewedItem.css';
import Modal from './../../utils/Modal/Modal';
import Slider from "react-slick";

class PreviewedItem extends Component {
    render() {
        const { item } = this.props;
        const price = item.price - item.price * item.saleoff / 100;
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Modal open={this.props.open} handleClose={this.props.handleClose} className="big">
                <div className="previewed-item">
                    <div className="previewed-item__imgs">
                        <Slider {...settings}>
                            {
                                item.imgs.map((img, index) => (
                                    <div key={index + img} className="previewed-img">
                                        <img src={img} alt="phone" />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    <div className="previewed-item-detail">
                        <h5>{item.name}</h5>
                        <div className="previewed-item-detail__price">
                            {price}đ
                            {
                                item.saleoff?
                                <span className="previewed-item-detail-saleoff">
                                    <span>{item.price}đ</span>
                                    <span>Tiết kiệm {item.saleoff}</span>
                                </span>
                                :
                                null
                            }
                    </div>
                        <p>Vận chuyển: Từ 1-5 ngày</p>
                        <p>{item.description}</p>
                        <div className="previewed-item-detail__variant">
                            <div className="variant-name">Color</div>
                            <div className="variant-value">
                                {
                                    item.colors.map((backgroundColor, index) => (
                                        <span style={{ backgroundColor }} key={index + backgroundColor} />
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
                               {item.details.RAM}
                            </div>
                        </div>
                        <div className="item-availability">
                            <i class="material-icons">
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
