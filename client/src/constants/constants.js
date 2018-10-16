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

import img_Vietinbank from '../assets/imgs/banks/Vietinbank.jpg';
import img_DongA from '../assets/imgs/banks/DongA.jpg';
import img_Vietcombank from '../assets/imgs/banks/Vietcombank.jpg';
import img_BIDV from '../assets/imgs/banks/BIDV.jpg';
import img_Techcombank from '../assets/imgs/banks/Techcombank.jpg';
import img_Sacombank from '../assets/imgs/banks/Sacombank.jpg';
import img_VIB from '../assets/imgs/banks/VIB.jpg';
import img_ACB from '../assets/imgs/banks/ACB.jpg';
import img_TPBank from '../assets/imgs/banks/TPBank.jpg';
import img_VPBank from '../assets/imgs/banks/VPBank.jpg';
import img_MaritimeBank from '../assets/imgs/banks/MaritimeBank.jpg';
import img_Agribank from '../assets/imgs/banks/Agribank.jpg';
import img_MB from '../assets/imgs/banks/MB.jpg';
import img_SHB from '../assets/imgs/banks/SHB.jpg';
import img_SeABank from '../assets/imgs/banks/SeABank.jpg';
import img_HDBank from '../assets/imgs/banks/HDBank.jpg';
import img_VietABank from '../assets/imgs/banks/VietABank.jpg';
import img_OceanBank from '../assets/imgs/banks/OceanBank.jpg';
import img_BAC from '../assets/imgs/banks/BAC.jpg';
import img_ABBank from '../assets/imgs/banks/ABBank.jpg';
import img_NamABank from '../assets/imgs/banks/NamABank.jpg';


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

export const bankImages = [
    img_Vietinbank, img_DongA, img_Vietcombank, img_BIDV,
    img_Techcombank, img_Sacombank, img_VIB, img_ACB,
    img_TPBank, img_VPBank, img_MaritimeBank, img_Agribank,
    img_MB, img_SHB, img_SeABank, img_HDBank, img_VietABank,
    img_OceanBank, img_BAC, img_ABBank, img_NamABank
];

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
    }),
    getBrand: () => new Promise((resolve, reject) => {
        setTimeout(() => resolve({
            id: 12,
            name: 'Xiaomi',
            background: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BXqCX6b/videoblocks-xiaomi-flag-waving-slow-motion-3d-rendering-blue-sky-background-editorial-animation-seamless-loop-4k_h55hi5vy_thumbnail-full01.png",
        }), 100);
    }),
}
export const calcDiscountPrice = (price, saleoff) => price * (1 - saleoff / 100.0);
export const formatPrice = (price) => price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });