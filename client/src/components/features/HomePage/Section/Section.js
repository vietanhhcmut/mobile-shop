import React, { Component } from 'react';
import './Section.css';
import ProductItem from '../../../common/ProductItem/ProductItem';

class Section extends Component {
    state = {
        items: [
            {
                id: 1,
                name: 'Iphone XSMax',
                price: 1200000,
                saleoff: 0,
                imgs: [
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/desk-PreOrder-Huawei-Y9_062LV5T-640.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-1XJ3UW-800.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-670VXH-800.png'
                ],
                category: 'Samsung',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus totam a necessitatibus reprehenderit quas nobis! Quisquam inventore ratione, porro error magni ullam ipsam distinctio.',
                colors: ['Black', 'White', 'Gold'],
                details: {
                    size: '',
                    screen: '',
                    SIM: '',
                    memory: '',
                    RAM: '3GB',
                    Bluetooth: '',
                    WLAN: '',
                    GPS: '',
                    Pin: '',
                    frontCam: '',
                    behindCam: ''
                }
            },
            {
                id: 2,
                name: 'Samsung Galaxy S3',
                price: 1200000,
                saleoff: 10, //10%
                imgs: [
                    'https://images-na.ssl-images-amazon.com/images/I/51odjdfuPTL.jpg',
                    'http://media.4rgos.it/i/Argos/5399785_R_Z001A?$Web$&$DefaultPDP570$',
                    'https://cdn.shopify.com/s/files/1/1847/2275/products/black_collage_87c37d78-7ac0-44d5-8b6c-5dbc1cb052e5_1000x1000.png?v=1519328585'
                ],
                category: 'Samsung',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus totam a necessitatibus reprehenderit quas nobis! Quisquam inventore ratione, porro error magni ullam ipsam distinctio.',
                colors: ['Black', 'White', 'Gold'],
                details: {
                    size: '',
                    screen: '',
                    SIM: '',
                    memory: '',
                    RAM: '3GB',
                    Bluetooth: '',
                    WLAN: '',
                    GPS: '',
                    Pin: '',
                    frontCam: '',
                    behindCam: ''
                }
            },
            {
                id: 3,
                name: 'Samsung Galaxy S3',
                price: 1200000,
                saleoff: 10, //10%
                imgs: [
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/desk-PreOrder-Huawei-Y9_062LV5T-640.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-1XJ3UW-800.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-670VXH-800.png'
                ],
                category: 'Samsung',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus totam a necessitatibus reprehenderit quas nobis! Quisquam inventore ratione, porro error magni ullam ipsam distinctio.',
                colors: ['Black', 'White', 'Gold'],
                details: {
                    size: '',
                    screen: '',
                    SIM: '',
                    memory: '',
                    RAM: '3GB',
                    Bluetooth: '',
                    WLAN: '',
                    GPS: '',
                    Pin: '',
                    frontCam: '',
                    behindCam: ''
                }
            },
            {
                id: 4,
                name: 'Samsung Galaxy S3',
                price: 1200000,
                saleoff: 10, //10%
                imgs: [
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/desk-PreOrder-Huawei-Y9_062LV5T-640.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-1XJ3UW-800.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-670VXH-800.png'
                ],
                category: 'Samsung',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus totam a necessitatibus reprehenderit quas nobis! Quisquam inventore ratione, porro error magni ullam ipsam distinctio.',
                colors: ['Black', 'White', 'Gold'],
                details: {
                    size: '',
                    screen: '',
                    SIM: '',
                    memory: '',
                    RAM: '3GB',
                    Bluetooth: '',
                    WLAN: '',
                    GPS: '',
                    Pin: '',
                    frontCam: '',
                    behindCam: ''
                }
            },
            {
                id: 5,
                name: 'Samsung Galaxy S3',
                price: 1200000,
                saleoff: 10, //10%
                imgs: [
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/desk-PreOrder-Huawei-Y9_062LV5T-640.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-1XJ3UW-800.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-670VXH-800.png'
                ],
                category: 'Samsung',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus totam a necessitatibus reprehenderit quas nobis! Quisquam inventore ratione, porro error magni ullam ipsam distinctio.',
                colors: ['Black', 'White', 'Gold'],
                details: {
                    size: '',
                    screen: '',
                    SIM: '',
                    memory: '',
                    RAM: '3GB',
                    Bluetooth: '',
                    WLAN: '',
                    GPS: '',
                    Pin: '',
                    frontCam: '',
                    behindCam: ''
                }
            },
            {
                id: 6,
                name: 'Samsung Galaxy S3',
                price: 1200000,
                saleoff: 10, //10%
                imgs: [
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/desk-PreOrder-Huawei-Y9_062LV5T-640.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-1XJ3UW-800.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-670VXH-800.png'
                ],
                category: 'Samsung',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus totam a necessitatibus reprehenderit quas nobis! Quisquam inventore ratione, porro error magni ullam ipsam distinctio.',
                colors: ['Black', 'White', 'Gold'],
                details: {
                    size: '',
                    screen: '',
                    SIM: '',
                    memory: '',
                    RAM: '3GB',
                    Bluetooth: '',
                    WLAN: '',
                    GPS: '',
                    Pin: '',
                    frontCam: '',
                    behindCam: ''
                }
            },
            {
                id: 7,
                name: 'Samsung Galaxy S3',
                price: 1200000,
                saleoff: 10, //10%
                imgs: [
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/desk-PreOrder-Huawei-Y9_062LV5T-640.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-1XJ3UW-800.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-670VXH-800.png'
                ],
                category: 'Samsung',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus totam a necessitatibus reprehenderit quas nobis! Quisquam inventore ratione, porro error magni ullam ipsam distinctio.',
                colors: ['Black', 'White', 'Gold'],
                details: {
                    size: '',
                    screen: '',
                    SIM: '',
                    memory: '',
                    RAM: '3GB',
                    Bluetooth: '',
                    WLAN: '',
                    GPS: '',
                    Pin: '',
                    frontCam: '',
                    behindCam: ''
                }
            },
            {
                id: 8,
                name: 'Samsung Galaxy S3',
                price: 1200000,
                saleoff: 10, //10%
                imgs: [
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/desk-PreOrder-Huawei-Y9_062LV5T-640.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-1XJ3UW-800.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-670VXH-800.png'
                ],
                category: 'Samsung',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus totam a necessitatibus reprehenderit quas nobis! Quisquam inventore ratione, porro error magni ullam ipsam distinctio.',
                colors: ['Black', 'White', 'Gold'],
                details: {
                    size: '',
                    screen: '',
                    SIM: '',
                    memory: '',
                    RAM: '3GB',
                    Bluetooth: '',
                    WLAN: '',
                    GPS: '',
                    Pin: '',
                    frontCam: '',
                    behindCam: ''
                }
            },
            {
                id: 9,
                name: 'Samsung Galaxy S3',
                price: 1200000,
                saleoff: 10, //10%
                imgs: [
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/desk-PreOrder-Huawei-Y9_062LV5T-640.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-1XJ3UW-800.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-670VXH-800.png'
                ],
                category: 'Samsung',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus totam a necessitatibus reprehenderit quas nobis! Quisquam inventore ratione, porro error magni ullam ipsam distinctio.',
                colors: ['Black', 'White', 'Gold'],
                details: {
                    size: '',
                    screen: '',
                    SIM: '',
                    memory: '',
                    RAM: '3GB',
                    Bluetooth: '',
                    WLAN: '',
                    GPS: '',
                    Pin: '',
                    frontCam: '',
                    behindCam: ''
                }
            },
            {
                id: 10,
                name: 'Samsung Galaxy S3',
                price: 1200000,
                saleoff: 10, //10%
                imgs: [
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/desk-PreOrder-Huawei-Y9_062LV5T-640.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-1XJ3UW-800.png',
                    'https://cdn.tgdd.vn/UserUpload/CampaignManager/20181007/Untitled-670VXH-800.png'
                ],
                category: 'Samsung',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus totam a necessitatibus reprehenderit quas nobis! Quisquam inventore ratione, porro error magni ullam ipsam distinctio.',
                colors: ['Black', 'White', 'Gold'],
                details: {
                    size: '',
                    screen: '',
                    SIM: '',
                    memory: '',
                    RAM: '3GB',
                    Bluetooth: '',
                    WLAN: '',
                    GPS: '',
                    Pin: '',
                    frontCam: '',
                    behindCam: ''
                }
            },
        ],
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
        slidedWidth: 0,
        screenWidth: 0,
        firstVisibleChild: 0,
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ screenWidth: window.innerWidth });
    }
    handleRandomizeBrand = () => {
        const brands = { ...this.state.brands };
        return [brands[0], brands[1], brands[2]];
    }
    handleSlideItem = type => () => {
        let { slidedWidth, screenWidth, firstVisibleChild} = this.state;
        switch (type) {
            case 'add':
                slidedWidth += 10;
                break;
            default:
                slidedWidth -= 10;
                break;
        }
        if ((slidedWidth <= -100 && screenWidth < 576) ||
            (slidedWidth <= -90 && screenWidth < 768 && screenWidth >= 576 )||
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
    render() {
        const brands = this.handleRandomizeBrand().map((brd, id) => (
            <button className={`section-action__button brand${this.state.activeBrand === id ? ' active' : ''}`} key={brd.id}>
                {brd.name}
            </button>
        ));
        const brandSection = this.props.brand ?
            <div className="product-brand">
                {brands}
            </div>
            :
            null;
        const itemSection = this.state.items.map((item,id) => (
            <ProductItem item={item} key={item.id} isFirst={id === this.state.firstVisibleChild} />
        ));
        const slideStyle = {
            transform: `translateX(${this.state.slidedWidth}%)`
        };
        console.log(slideStyle);
        return (
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
        );
    }
}

export default Section;