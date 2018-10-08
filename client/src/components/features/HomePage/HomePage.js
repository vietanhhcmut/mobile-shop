import React, { Component } from 'react';
import './HomePage.css';
import Section from './Section/Section';

class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <Section title="Sản phẩm nổi bật"/>
                <Section title="Điện thoại" brand/>
            </div>
        );
    }
}

export default HomePage;