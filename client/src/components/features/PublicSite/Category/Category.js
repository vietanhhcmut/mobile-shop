import React, { Component } from 'react';
import './Category.css';
import { api } from './../../../../constants/constants';
import { Button } from '@material-ui/core';
import ProductItem from './../../../common/ProductItem/ProductItem';
import PreviewedItem from './../../../common/ProductItem/PreviewedItem/PreviewedItem';

class Category extends Component {
    state = {
        category: {
            id: 1,
            name: "",
            background: ""
        },
        items: [],
        previewingItem: null,
    }
    componentDidMount() {
        api.getBrand()
        .then(category => this.setState({ category }));
        api.getProducts()
        .then(items => this.setState({ items }));
    }
    handlePreviewItem = (previewingItem) => e => {
            this.setState({ previewingItem });
    }
    render() {
        const items = this.state.items.map(item => (
            <div className="category-product" key={item.id} >
                <ProductItem
                    item={item}
                    handleTogglePreviewItem={this.handlePreviewItem(item)}
                />
            </div>
        ))
        return (
            <div className="category">
                <h2 className="category__title">{this.state.category.name}</h2>
                <div className="category__background">
                    <img src={this.state.category.background} alt="background"/>
                </div>
                <div className="category__products">
                    <div className="category-products-filter">
                        <select name="" id="">
                            <option value="name">Tên A-Z</option>
                            <option value="name">Tên Z-A</option>
                            <option value="name">Giá từ cao đến thấp</option>
                            <option value="name">Giá từ thấp đến cao</option>
                        </select>
                        <Button variant="contained" color="dark">Lọc</Button>
                    </div>
                    <div className="category-products-grid">
                        {items}
                    </div>
                </div>
                {
                    this.state.previewingItem !== null &&
                    <PreviewedItem open={this.state.previewingItem} handleClose={this.handlePreviewItem(null)} item={this.state.previewingItem} />
                }
            </div>
        );
    }
}

export default Category;