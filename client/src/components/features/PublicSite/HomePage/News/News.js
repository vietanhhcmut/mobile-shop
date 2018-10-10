import React, { Component } from 'react';
import './News.css';
import Carousel from './Carousel/Carousel';
import { newsImages } from '../../../../../constants/constants';

class News extends Component {
    state = {
        topNews: {
            img: newsImages.newsTop,
            link: '#'
        },
        rightNews1: {
            img: newsImages.newsRightTop,
            link: '#'
        },
        rightNews2: {
            img: newsImages.newsRightBottom,
            link: '#'
        },
        bottomNews1: {
            title: 'Iphone S4',
            decription: 'Lorem, ipsum dolor sit amet conse ctetur adipisicing elit ctetur adipisicing elit.',
            img: newsImages.newsBottomLeft,
            link: '#'
        },
        bottomNews2: {
            title: 'Iphone S4',
            decription: 'Lorem, ipsum dolor sit amet co Lorem, ipsum dolor sit amet co nsectetur adipisicing elit.',
            img: newsImages.newsBottomRight,
            link: '#'
        },
        carousel: [
            {
                img: newsImages.newsBanners[0],
                link: '#'
            },
            {
                img: newsImages.newsBanners[1],
                link: '#'
            },
            {
                img: newsImages.newsBanners[2],
                link: '#'
            },
            {
                img: newsImages.newsBanners[3],
                link: '#'
            },
            {
                img: newsImages.newsBanners[4],
                link: '#'
            },
            {
                img: newsImages.newsBanners[5],
                link: '#'
            }
        ]
    }
    render() {
        const { topNews, carousel, rightNews1, rightNews2, bottomNews1, bottomNews2 } = this.state;
        return (
            <div className='home__news'>
                <div className='news__top-news'>
                    <a className='news-img' href={topNews.link}>
                        <img src={topNews.img} alt="Top News" />
                    </a>
                </div>

                <div className='news__center-news'>
                    <div className='center-news__carousel'>
                        <Carousel>
                            {carousel.map((banner, index) =>
                                <a key={'center-news__carousel' + index} href={banner.link}>
                                    <img src={banner.img} alt={"banner" + index} />
                                </a>
                            )}
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
                                <div className='content__wrapper'>
                                    <h4>{bottomNews1.title}</h4>
                                    <p>{bottomNews1.decription}</p>
                                    <a href={bottomNews1.link}>READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-news__right'>
                        <div className='bottom-news'>
                            <img src={bottomNews2.img} alt="Bottom News 2" />
                            <div className='bottom-news__content'>
                                <div className='content__wrapper'>
                                    <h4>{bottomNews2.title}</h4>
                                    <p>{bottomNews2.decription}</p>
                                    <a href={bottomNews2.link}>READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;