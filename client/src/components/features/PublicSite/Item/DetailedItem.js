import React, { Component } from 'react';
import './DetailedItem.css';
import { formatPrice, calcDiscountPrice } from '../../../../constants/constants';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DetailInfo from './DetailInfo/DetailInfo';
import Review from './Review/Review';
import Context from '../../../../Context';
import axios from '../../../../constants/axiosInstance';

class DetailedItem extends Component {
    state = {
        item: null,
        showingImg: null,
        number: 1,
        tab: 1,
        selectedColor: 0
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get("/api/product/getOne.php?id=" + id)
            .then(res => {
                this.setState({ item: res.data, showingImg: res.data.imgs[0] });
            })
            .catch(err => {
                console.log(err);
            });
    }
    handleChangeShowingImg = img => () => this.setState({ showingImg: img });
    handleChangeNumber = type => () => {
        if (type === 'incr') {
            this.setState(prevState => ({
                number: prevState.number + 1
            }));
        }
        else {
            if (this.state.number < 2) return;
            this.setState(prevState => ({
                number: prevState.number - 1
            }));
        }
    }
    hanleSwitchTab = (e, tab) => this.setState({ tab });
    handleSelectColor = (index) => () => {
        this.setState({ selectedColor: index });
    }
    handleAddToCart = (context, id, quantity, color) => {
        const boundingImg = this.productImg.getBoundingClientRect();
        context.handleAddToCart(id, quantity, color, boundingImg, this.state.showingImg);
    }
    render() {
        const { item, selectedColor, number } = this.state;
        let generalItemInfo;
        if (item) {
            // CSS IN PREVIEWD ITEM
            generalItemInfo = (
                <React.Fragment>
                    <h4>{item.name}</h4>
                    <div className="previewed-item-detail__price">
                        {formatPrice(calcDiscountPrice(item.price, item.saleoff))}
                        {
                            item.saleoff ?
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
                        <div className="variant-name">Color</div>
                        <div className="variant-value">
                            {
                                item.colors.map((color, index) => (
                                    <span style={{ backgroundColor: color.color }} key={index + color.color}
                                        className={selectedColor === index ? 'active' : ''}
                                        onClick={this.handleSelectColor(index)} />
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
                </React.Fragment>
            )
        }
        const { tab } = this.state;
        return (
            <div className="item-detail">
                <div className="item-detail__imgs">
                    <div className="main-img">
                        <img src={this.state.showingImg} alt="phone" ref={img => this.productImg = img}/>
                    </div>
                    <div className="sub-imgs">
                        {
                            this.state.item &&
                            this.state.item.imgs.map((img, id) => (
                                <img
                                    src={img}
                                    alt="phone"
                                    onClick={this.handleChangeShowingImg(img)}
                                    key={id + img}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="item-detail__general-info">
                    {generalItemInfo}
                    <div className="general-info__add-cart">
                        <div className="add-cart__quantity">
                            <div className="quantity-number">
                                {this.state.number}
                            </div>
                            <div className="quantity-incr quantity-action" onClick={this.handleChangeNumber('incr')}>
                                <i className="material-icons">
                                    keyboard_arrow_up
                                </i>
                            </div>
                            <div className="quantity-descr quantity-action" onClick={this.handleChangeNumber('descr')}>
                                <i className="material-icons">
                                    keyboard_arrow_down
                                </i>
                            </div>
                        </div>
                        <Context.Consumer>
                            {context => 
                            <Button variant="outlined" color="secondary" className="add-cart-button"
                                onClick={() => this.handleAddToCart(context, item.id, number, 
                                    item.colors.length===0 ? 'Đen' : item.colors[selectedColor].name)}>
                                ADD TO CART
                            </Button>
                            }
                        </Context.Consumer>
                    </div>
                </div>
                <div className="item-detail__detail-info">
                    <AppBar position="static" color="default">
                        <Tabs value={tab} onChange={this.hanleSwitchTab}>
                            <Tab value={1} label="Chi tiết sản phẩm" />
                            <Tab value={2} label="Đánh giá" />
                        </Tabs>
                        {tab === 1 && item && <DetailInfo detail={item} />}
                        {tab === 2 && <Review productId={item.id} />}
                    </AppBar>
                </div>
            </div >
        );
    }
}

export default withRouter(DetailedItem);