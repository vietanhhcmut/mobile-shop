import React, { Component } from "react";
import Slider from "react-slick";
import './Footer.css';
import { imgs_logo, imgs_payment } from '../../../constants/constants';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";

export default class Footer extends Component{
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            autoplay: true,
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  }
                }
              ]
        };
        return (
            <footer>
                <div className="footer-top">
                    <Slider {...settings}>
                        <div className="footer-top__logo">
                            <img src={imgs_logo} alt="logo" />
                        </div>
                        <div className="footer-top__logo">
                            <img src={imgs_logo} alt="logo" />
                        </div>
                        <div className="footer-top__logo">
                            <img src={imgs_logo} alt="logo" />
                        </div>
                        <div className="footer-top__logo">
                            <img src={imgs_logo} alt="logo" />
                        </div>
                        <div className="footer-top__logo">
                            <img src={imgs_logo} alt="logo" />
                        </div>
                        <div className="footer-top__logo">
                            <img src={imgs_logo} alt="logo" />
                        </div>
                    </Slider>
                </div>
                <div className="footer-center">
                    <div className="footer-center__contact">
                        <h4>
                            Thông tin cửa hàng
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel libero quo sit impedit explicabo, voluptates magnam earum, inventore vero eligendi quod laborum odio nobis consequuntur ex repellendus tempore distinctio ab?
                        </p>
                        <ul>
                            <li>
                                <i className="material-icons">
                                    location_on
                                </i>
                                123 Đường Vành Đai, Tân Lập, Đông Hòa, Dĩ An, Bình Dương
                            </li>
                            <li>
                                <i className="material-icons">
                                    phone_iphone
                                </i>
                                0374584321
                            </li>
                            <li>
                                <i class="material-icons">
                                    email
                                </i>    
                                mobileshop@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="footer-center__social">
                        <h4>
                            Thông tin liên hệ
                        </h4>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i class="fab fa-youtube"></i>
                                    <span>Youtube</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                    <span>Twitter</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-center__form">
                        <TextField
                            id="outlined-with-placeholder"
                            label="Name"
                            placeholder="Name"
                            margin="normal"
                            variant="outlined"
                            required="true"
                            className="footer-center__form-input"
                            />
                        <TextField
                            id="outlined-with-placeholder"
                            label="Email"
                            placeholder="Email"
                            margin="normal"
                            variant="outlined"
                            required="true"
                            className="footer-center__form-input"
                            />
                        <TextField
                            id="outlined-textarea"
                            label="Description"
                            placeholder="Description"
                            multiline
                            margin="normal"
                            variant="outlined"
                            required="true"
                            className="footer-center__form-input"
                            />
                        <Button variant="contained" className="footer-center__form-btn">
                            Gửi tin nhắn
                        </Button>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom__copyright">
                        <p>Copyright &copy; 2018. All Rights Reserved.</p>
                        <p>Designed By LaD Mobile</p>
                    </div>
                    <div className="footer-bottom__payment">
                        <img src={imgs_payment} alt="logo" />
                    </div>
                    <div className="clear"></div>
                </div>
            </footer>
        );
    }
}