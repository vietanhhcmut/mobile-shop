import React, { Component } from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="not-found-page">
                <div className="scene">
                    <div className="box">
                        <div className="box__face front">4</div>
                        <div className="box__face back">0</div>
                        <div className="box__face right">4</div>
                        <div className="box__face left">0</div>
                        <div className="box__face top">0</div>
                        <div className="box__face bottom">0</div>
                    </div>
                    <div className="shadow"></div>
                </div>
                <div className="desc">
                    <h2>Ooops page not found!</h2>
                    <Link to="/"><button>BACK TO HOME PAGE</button></Link>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;