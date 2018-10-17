import img_logoSite from '../assets/imgs/logo.jpg';

import img_logo1 from '../assets/imgs/logo/apple.png';
import img_logo2 from '../assets/imgs/logo/lg.png';
import img_logo3 from '../assets/imgs/logo/nokia.jpg';
import img_logo4 from '../assets/imgs/logo/samsung.png';
import img_logo5 from '../assets/imgs/logo/Sony1.jpg';

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


export const logo_brand = [img_logo1, img_logo2, img_logo3, img_logo4, img_logo5];

export const imgs_payment = img_payment;

export const logoSite = img_logoSite;

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
                price: 10200000,
                saleoff: 0,
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/27-large_default/printed-chiffon-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/24-large_default/printed-chiffon-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/25-home_default/printed-chiffon-dress.jpg'
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
                price: 14899000,
                saleoff: 10, //10%
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/42-large_default/blouse.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/41-large_default/blouse.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/40-large_default/blouse.jpg'
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
                name: 'Xiaomi Redmi Note 4',
                price: 8687000,
                saleoff: 5, //10%
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/44-large_default/printed-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/43-large_default/printed-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/34-cart_default/printed-dress.jpg'
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
                name: 'OPPO F1s',
                price: 6764000,
                saleoff: 15, //10%
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/37-cart_default/faded-short-sleeves-tshirt.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/28-cart_default/printed-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/25-cart_default/printed-dress.jpg'
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
                name: 'Xiaomi Redmi 3 Pro',
                price: 3230000,
                saleoff: 8, //10%
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/31-cart_default/printed-summer-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/34-cart_default/printed-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/29-cart_default/printed-summer-dress.jpg'
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
                name: 'Samsung Galaxy S8',
                price: 12999000,
                saleoff: 6, //10%
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/27-cart_default/printed-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/36-cart_default/printed-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/42-cart_default/printed-dress.jpg'
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
                name: 'Asus Zenfone 2',
                price: 8910000,
                saleoff: 3, //10%
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/41-cart_default/blouse.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/24-cart_default/printed-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/26-cart_default/printed-dress.jpg'
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
                name: 'Samsung Galaxy S8',
                price: 4100000,
                saleoff: 2, //10%
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/24-large_default/printed-chiffon-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/27-large_default/printed-chiffon-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/25-home_default/printed-chiffon-dress.jpg'
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
                name: 'Sony Xperia XA',
                price: 5430000,
                saleoff: 0, //10%
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/37-cart_default/faded-short-sleeves-tshirt.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/28-cart_default/printed-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/25-cart_default/printed-dress.jpg'
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
                name: 'Iphone 7 Plus',
                price: 13509000,
                saleoff: 12, //10%
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/42-large_default/blouse.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/41-large_default/blouse.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/40-large_default/blouse.jpg'
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
                price: 9599000,
                saleoff: 10, //10%
                imgs: [
                    'https://demo4leotheme.com/prestashop/leo_mobile/44-large_default/printed-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/27-large_default/printed-dress.jpg',
                    'https://demo4leotheme.com/prestashop/leo_mobile/37-large_default/faded-short-sleeves-tshirt.jpg'
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
            background: "https://i1.wp.com/kliknklik.com/blogs/wp-content/uploads/2018/04/Smartphones-Xiaomi.jpg?resize=720%2C377&ssl=1",
        }), 100);
    }),
}
export const calcDiscountPrice = (price, saleoff) => price * (1 - saleoff / 100.0);
export const formatPrice = (price) => price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });