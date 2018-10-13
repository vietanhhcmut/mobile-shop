import React, { Component } from 'react';
import './Section.css';
import ProductItem from './../../../../common/ProductItem/ProductItem';
import PreviewedItem from './../../../../common/ProductItem/PreviewedItem/PreviewedItem';
import { api } from '../../../../../constants/constants';

class Section extends Component {
    state = {
        items: [],
        brands: [],
        activeBrand: 0,
        slidedWidth: 0,
        screenWidth: 0,
        firstVisibleChild: 0,
        previewItem: false,
        item: 0,
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        api.getProducts()
        .then(res => this.setState({ items: res }));
        api.getBrands()
        .then(res => this.setState({ brands: res }));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ screenWidth: window.innerWidth });
    }
    handleRandomizeBrand = () => {
        const brands = [ ...this.state.brands ];
        if (brands.length < 3) return brands;
        return [brands[0], brands[1], brands[2]];
    }
    handleSlideItem = type => () => {
        let { slidedWidth, screenWidth, firstVisibleChild} = this.state;
        switch (type) {
            case 'add':
                slidedWidth += 10;
                break;
            default:
                slidedWidth -= 10;
                break;
        }
        if ((slidedWidth <= -100 && screenWidth < 576) ||
            (slidedWidth <= -90 && screenWidth < 768 && screenWidth >= 576 )||
            (slidedWidth <= -80 && screenWidth < 992 && screenWidth >= 768) ||
            (slidedWidth <= -70 && screenWidth < 1200 && screenWidth >= 992) ||
            (slidedWidth <= -60 && screenWidth >= 1200) ||
            slidedWidth >= 0) {
            slidedWidth = 0;
        }
        firstVisibleChild = Math.abs(slidedWidth / 10);
        this.setState({
            slidedWidth,
            firstVisibleChild,
        });
    }
    handleTogglePreviewItem = id => e => {
        console.log(id);
        this.setState(prevState => ({
                previewItem: !prevState.previewItem,
                item: id,
        }));
    }
    render() {
        const brands = this.handleRandomizeBrand().map((brd, id) => (
            <button className={`section-action__button brand${this.state.activeBrand === id ? ' active' : ''}`} key={brd.id}>
                {brd.name}
            </button>
        ));
        const brandSection = this.props.brand ?
            <div className="product-brand">
                {brands}
            </div>
            :
            null;
        const itemSection = this.state.items.map((item,id) => (
            <ProductItem
                item={item}
                key={item.id}
                isFirst={id === this.state.firstVisibleChild}
                handleTogglePreviewItem={this.handleTogglePreviewItem(id)}
            />
        ));
        let slideStyle = {
            transform: `translateX(${this.state.slidedWidth}%)`
        };
        return (
            <React.Fragment>
                <div className={`section${this.props.brand ? ' has-brand' : ''}`}>
                    <div className="section__header">
                        <h4 className="section-title">
                            <i className="material-icons">
                                stay_current_portrait
                            </i>
                            {this.props.title}
                        </h4>
                        <div className="section-action">
                            <button className="section-action__button" onClick={this.handleSlideItem('add')}>
                                <i className="material-icons">
                                    chevron_left
                                </i>
                            </button>
                            <button className="section-action__button" onClick={this.handleSlideItem('minus')}>
                                <i className="material-icons">
                                    chevron_right
                                </i>
                            </button>
                        </div>
                        {brandSection}
                    </div>
                    <div className="header-line"></div>
                    <div className="section__items">
                        <div className="item-gallery" style={slideStyle} ref={gallery => this.gallery = gallery}>
                            {itemSection}
                        </div>
                    </div>
                </div>
                {
                    this.state.items.length > 0 &&
                    <PreviewedItem
                        item={this.state.items[this.state.item]}
                        open={this.state.previewItem}
                        handleClose={this.handleTogglePreviewItem(0)}
                    />
                }
            </React.Fragment>
        );
    }
}

export default Section;