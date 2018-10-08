import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
    state = {
        items: [],
        brands: [
            {
                id: 0,
                name: 'Samsung'
            },
            {
                id: 2,
                name: 'Sony'
            },
            {
                id: 3,
                name: 'LG'
            },
            {
                id: 4,
                name: 'Xiaomi'
            },
            {
                id: 5,
                name: 'Apple'
            }
        ],
        activeBrand: 0,
    }
    handleRandomizeBrand = () => {
        const { brands } = this.state;
        let indexs;
        console.log("Hoho");
        do {
            indexs = [];
            indexs = [...indexs, Math.floor(Math.random() * brands.length)]
            indexs = [...indexs, Math.floor(Math.random() * brands.length)];
            indexs = [...indexs, Math.floor(Math.random() * brands.length)];
        }
        while(indexs.length < 3);
        console.log("Hi");
        return indexs.map(id => brands[id]);
    }
    render() {
        const brands = this.handleRandomizeBrand().map((brd, id) => (
            <button className={`section-action__button brand${this.state.activeBrand === id? ' active' : ''}`} key={brd.id}>
                {brd.name}
            </button>
        ));
        const brandSection = this.props.brand? 
                <div className="product-brand">
                    {brands}
                </div>
                :
                null;
        return (
            <div className="section">
                <div className="section__header">
                    <h4 className="section-title">
                        <i className="material-icons">
                            stay_current_portrait
                        </i>
                        {this.props.title}
                    </h4>
                    <div className="section-action">
                        <button className="section-action__button">
                            <i className="material-icons">
                                chevron_left
                            </i>
                        </button>
                        <button className="section-action__button">
                            <i className="material-icons">
                                chevron_right
                            </i>
                        </button>
                    </div>
                    {brandSection}
                </div>
                <div className="section_items">

                </div>
            </div>
        );
    }
}

export default Section;