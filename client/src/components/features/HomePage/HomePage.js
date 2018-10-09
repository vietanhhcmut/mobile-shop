import React, { Component } from 'react';
import './HomePage.css';
import Section from './Section/Section';
import Footer from '../../common/Footer/Footer';


class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <Section title="Sản phẩm nổi bật"/>
                <Section title="Điện thoại" brand/>
                <Footer />
            </div>
        );
    }
}

export default HomePage;