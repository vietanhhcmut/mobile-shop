import React, { Component } from 'react';
import './Section.css';
import ProductItem from './../../../../common/ProductItem/ProductItem';
import PreviewedItem from './../../../../common/ProductItem/PreviewedItem/PreviewedItem';
import axios from '../../../../../constants/axiosInstance';

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
    handleGetCategoryTop = (categoryId) => {
        axios.post("/api/product/getTopCategoryProds.php", { categoryId })
            .then(res => {
                this.setState({ items: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        if (!this.props.brand) {
            axios.get("/api/product/getTop.php")
                .then(res => {
                    this.setState({ items: res.data });
                })
                .catch(err => {
                    console.log(err);
                });
        }

        axios.get("/api/category/getAll.php")
            .then(res => {
                this.setState({ brands: res.data });
                if (this.props.brand) {
                    const { brands, activeBrand } = this.state;
                    this.handleGetCategoryTop(brands[activeBrand].id);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ screenWidth: window.innerWidth });
    }
    handleSlideItem = type => () => {
        let { slidedWidth, screenWidth, firstVisibleChild } = this.state;
        switch (type) {
            case 'add':
                slidedWidth += 10;
                break;
            default:
                slidedWidth -= 10;
                break;
        }
        if ((slidedWidth <= -100 && screenWidth < 576) ||
            (slidedWidth <= -90 && screenWidth < 768 && screenWidth >= 576) ||
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
        this.setState(prevState => ({
            previewItem: !prevState.previewItem,
            item: id,
        }));
    }
    handleClickBrand = brandIndex => () => {
        const { brands } = this.state;
        this.setState({ activeBrand: brandIndex });
        this.handleGetCategoryTop(brands[brandIndex].id);
    }
    render() {
        const brands = this.state.brands.map((brd, id) => (
            <button className={`section-action__button brand${this.state.activeBrand === id ? ' active' : ''}`}
                key={brd.id}
                onClick={this.handleClickBrand(id)}>
                {brd.name}
            </button>
        ));
        const brandSection = this.props.brand ?
            <div className="product-brand">
                {brands}
            </div>
            :
            null;
        const itemSection = this.state.items.map((item, id) => (
            <ProductItem
                item={item}
                key={item.id}
                isFirst={id === this.state.firstVisibleChild}
                handleTogglePreviewItem={this.handleTogglePreviewItem(id)}
            />
        ));
        let slideStyle = {
            transform: this.state.slidedWidth === 0 ? 'none' : `translateX(${this.state.slidedWidth}%)`
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