import React, { Component } from 'react';
import './Category.css';
import { Button } from '@material-ui/core';
import ProductItem from './../../../common/ProductItem/ProductItem';
import PreviewedItem from './../../../common/ProductItem/PreviewedItem/PreviewedItem';
import axios from '../../../../constants/axiosInstance';

class Category extends Component {
    state = {
        category: {
            id: 1,
            name: "",
            background: ""
        },
        items: [],
        previewingItem: null,
        currentPage: 0,
        totalPage: 0
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.handleInit(id);

    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.handleInit(this.props.match.params.id);
        }
    }
    handleInit = (id) => {
        axios.get('/api/category/getOne.php?id=' + id)
            .then(res => {
                this.setState({ category: res.data });
            })
            .catch(err => {
                console.log(err);
            });
        this.handleGetCategoryProds(this.state.currentPage);
        axios.get('/api/product/getTotalPage.php?categoryId=' + id)
            .then(res => {
                this.setState({ totalPage: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
    handlePreviewItem = (previewingItem) => e => {
        this.setState({ previewingItem });
    }
    handleGetCategoryProds = (currentPage) => {
        const id = this.props.match.params.id;
        axios.get(`/api/product/getCategoryProds.php?categoryId=${id}&page=${currentPage}`)
            .then(res => {
                this.setState({ items: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
    handleSelectPage = (index) => () => {
        this.setState({ currentPage: index });
        this.handleGetCategoryProds(index);
    }
    render() {
        const { currentPage, totalPage } = this.state;
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
                    <img src={this.state.category.image} alt="background" />
                </div>
                <div className="category__products">
                    <div className="category-products-filter">
                        <select name="" id="">
                            <option value="name">Tên A - Z</option>
                            <option value="name">Tên Z - A</option>
                            <option value="name">Giá từ cao đến thấp</option>
                            <option value="name">Giá từ thấp đến cao</option>
                        </select>
                        <Button variant="contained">Lọc</Button>
                    </div>
                    <div className="category-products-grid">
                        {items}
                    </div>
                </div>
                {
                    this.state.previewingItem !== null &&
                    <PreviewedItem open={this.state.previewingItem} handleClose={this.handlePreviewItem(null)} item={this.state.previewingItem} />
                }
                <div className="category__pagination">
                    <i className="material-icons"
                        onClick={this.handleSelectPage(0)}>first_page</i>
                    <i className="material-icons"
                        onClick={this.handleSelectPage(currentPage < 1 ? currentPage : currentPage - 1)}>chevron_left</i>
                    {[...Array(totalPage)].map((el, index) =>
                        <span key={'page' + index}
                            className={currentPage === index ? 'pagination__active' : ''}
                            onClick={this.handleSelectPage(index)}>
                            {index + 1}
                        </span>
                    )}
                    <i className="material-icons"
                        onClick={this.handleSelectPage(currentPage === totalPage - 1 ? currentPage : currentPage + 1)}>chevron_right</i>
                    <i className="material-icons"
                        onClick={this.handleSelectPage(totalPage - 1)}>last_page</i>
                </div>
            </div>
        );
    }
}

export default Category;