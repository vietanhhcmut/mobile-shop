import img_logo from '../assets/imgs/1-brands_default.jpg';
import img_payment from '../assets/imgs/payment.png';

import img_newsTop from '../assets/imgs/news/news-top.png';
import img_banner1 from '../assets/imgs/news/banner6.jpg';
import img_banner2 from '../assets/imgs/news/banner11.jpg';
import img_banner3 from '../assets/imgs/news/banner14.jpg';
import img_banner4 from '../assets/imgs/news/banner15.jpg';
import img_banner5 from '../assets/imgs/news/banner3.jpg';
import img_banner6 from '../assets/imgs/news/banner13.jpg';
import img_newsRightTop from '../assets/imgs/news/news-right-top.jpg';
import img_newsRightBottom from '../assets/imgs/news/news-right-bottom.jpg';
import img_newsBottomLeft from '../assets/imgs/news/news-bottom-left.jpg';
import img_newsBottomRight from '../assets/imgs/news/news-bottom-right.jpg';

export const imgs_logo = img_logo;
export const imgs_payment = img_payment;

export const newsImages = {
    newsBanners: [img_banner1, img_banner2, img_banner3, img_banner4, img_banner5, img_banner6],
    newsTop: img_newsTop,
    newsRightTop: img_newsRightTop,
    newsRightBottom: img_newsRightBottom,
    newsBottomLeft: img_newsBottomLeft,
    newsBottomRight: img_newsBottomRight
}


export const api = {
    getProducts: () => new Promise((resolve, reject) => {
        setTimeout(() => resolve([
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
        ]), 100);
    }),
    getBrands: () => new Promise((resolve, reject) => {
        setTimeout(() => resolve([
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
        ]), 100); 
    }),
    getItem: (id) => new Promise((resolve, reject) => {
        setTimeout(() => resolve(
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
                    screen: '6.4 inches',
                    SIM: '1 sim micro',
                    memory: '128GB',
                    RAM: '3GB',
                    Bluetooth: '5.0',
                    WLAN: '802.11 a/b/g/n/ac',
                    GPU: 'Mali-G72 MP18',
                    Pin: '3100mA',
                    camera: '13 MP',
                    OS: 'Android 8.1'
                }
            }
        ), 100); 
    })
}
export const calcDiscountPrice = (price, saleoff) => price * (1 - saleoff / 100.0); 
export const formatPrice = (price) => price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});