import React, { Component } from 'react';
import './News.css';
import Carousel from './Carousel/Carousel';
class News extends Component {
    state = {
        topNews: {
            img: 'https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/appagebuilder/images/banner_nav.png',
            link: '#'
        },
        rightNews1: {
            img: 'https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/appagebuilder/images/banner_slide.jpg',
            link: '#'
        },
        rightNews2: {
            img: 'https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/appagebuilder/images/banner_slide_1.jpg',
            link: '#'
        },
        bottomNews1: {
            title: 'Iphone S4',
            decription: 'Lorem, ipsum dolor sit amet conse ctetur adipisicing elit ctetur adipisicing elit.',
            img: 'https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/appagebuilder/images/banner-proto.jpg',
            link: 'url'
        },
        bottomNews2: {
            title: 'Iphone S4',
            decription: 'Lorem, ipsum dolor sit amet co Lorem, ipsum dolor sit amet co nsectetur adipisicing elit.',
            img: 'https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/appagebuilder/images/banner-proto-1.jpg',
            link: 'url'
        },
        carousel: [
            {
                title: 'Iphone S4',
                decription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/leoslideshow/slide-2.jpg',
                link: 'url'
            },
            {
                title: 'Iphone S4',
                decription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit consectetur adipisicing elit.',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/leoslideshow/slide-2.jpg',
                link: 'url'
            }
        ]
    }
    render() {
        const { topNews, carousel, rightNews1, rightNews2, bottomNews1, bottomNews2 } = this.state;
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return(
            <div className='home__news'>
                <div className='news__top-news'>
                    <a className='news-img' href={topNews.link}>
                        <img src={topNews.img} alt="Top News" />
                    </a>
                </div>
                
                <div className='news__center-news'>
                    <div className='center-news__carousel'>
                        <Carousel>
                            <img src="http://thuthuatphanmem.vn/uploads/2018/04/10/hinh-anh-dep-ve-tinh-yeu-54_052634251.jpg" alt="image1" />
                            <img src="https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/leoslideshow/slide-2.jpg" alt="image2" />
                            <img src="http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-11_044127919.jpg" alt="image3" />
                            <img src="https://dantricdn.com/thumb_w/640/2018/anh-drone-1-1514880827496.jpg" alt="image3" />
                        </Carousel>
                    </div>
                  
                    <div className='center-news__right-news'>
                        <div className='right-news__top'>
                            <a className='news-img' href={rightNews1.link}>
                                <img src={rightNews1.img} alt="Right News 1" />
                            </a>
                        </div>
                        <div className='right-news__bottom'>
                            <a className='news-img' href={rightNews2.link}>
                                <img src={rightNews2.img} alt="Right News 2" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='news__bottom-news'>
                    <div className='bottom-news__left'>
                        <div className='bottom-news'>
                            <img src={bottomNews1.img} alt="Bottom News 1" />
                            <div className='bottom-news__content'>
                                <h2>{bottomNews1.title}</h2>
                                <p>{bottomNews1.decription}</p>
                                <a href={bottomNews1.link}>READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-news__right'>
                        <div className='bottom-news'>
                            <img src={bottomNews2.img} alt="Bottom News 2" />
                            <div className='bottom-news__content'>
                                <h2>{bottomNews2.title}</h2>
                                <p>{bottomNews2.decription}</p>
                                <a href={bottomNews2.link}>READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;