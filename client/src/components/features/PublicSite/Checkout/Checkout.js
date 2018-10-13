import React, { Component } from 'react';
import './Checkout.css';
import { bankImages } from '../../../../constants/constants';

class Checkout extends Component {
    state = {
        currentBlock: 0,
        payMethod: 'cash',
        signIn: true,
        isGuest: true,
        cart: [
            {
                id: '123',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/33-small_default/printed-dress.jpg',
                name: 'Samsung Galaxy Tab',
                price: 16998000,
                saleoff: 5,
                quantity: 1,
                color: 'Black'
            },
            {
                id: '456',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/24-small_default/printed-chiffon-dress.jpg',
                name: 'Sony Xperia XZs',
                price: 7569000,
                saleoff: 3,
                quantity: 3,
                color: 'White'
            },
            {
                id: '789',
                img: 'https://demo4leotheme.com/prestashop/leo_mobile/43-small_default/printed-dress.jpg',
                name: 'OPPO F3 Plus',
                price: 9890000,
                saleoff: 10,
                quantity: 2,
                color: 'Gold'
            }
        ]
    }
    handleClickBlock = (block) => () => {
        this.setState({ currentBlock: block });
    }
    handleChangePayMethod = (payMethod) => () => {
        this.setState({ payMethod });
    }
    handleClickSignIn = () => {
        this.setState({ isGuest: false });
    }
    handleClickGuest = () => {
        this.setState({ isGuest: true });
    }
    render() {
        const { currentBlock, payMethod, isGuest } = this.state;
        return (
            <div className='checkout'>
                <div className='checkout__info'>
                    <div className='info__block' onClick={this.handleClickBlock(0)}>
                        <div className='block__title'>
                            <span>1</span>
                            <span>THÔNG TIN CÁ NHÂN</span>
                        </div>
                        {currentBlock === 0 &&
                            <div className='block__content'>
                                <div className='content__guest-or-signin'>
                                    <span className={'guest-or-signin ' + (isGuest ? 'guest-or-signin__active' : '')}
                                        onClick={this.handleClickGuest}>Khách</span>
                                    |
                                    <span className={'guest-or-signin ' + (isGuest ? '' : 'guest-or-signin__active')}
                                        onClick={this.handleClickSignIn}>Đăng nhập</span>
                                </div>
                                {isGuest &&
                                    <div className='content__personal-info'>
                                    <div className='personal-info__row'>
                                        <span>Họ</span>
                                        <input type="text" />
                                    </div>
                                    <div className='personal-info__row'>
                                        <span>Tên</span>
                                        <input type="text" />
                                    </div>
                                    <div className='personal-info__row'>
                                        <span>Giới tính</span>
                                        <div className='row__gender'>
                                            <span><input type="radio" name='gender' /> Nam</span>
                                            <span><input type="radio" name='gender' /> Nữ</span>
                                        </div>
                                    </div>
                                    <div className='personal-info__row'>
                                        <span>Email</span>
                                        <input type="text" />
                                    </div>
                                    <div className='personal-info__signup-row'>
                                        <span><b>Tạo tài khoản</b> <i>(Không bắt buộc)</i></span>
                                        <p>Để tiết kiệm thời gian hơn trong đơn hàng tiếp theo của bạn.</p>
                                    </div>
                                    <div className='personal-info__row'>
                                        <span>Mật khẩu</span>
                                        <input type="password" />
                                    </div>
                                    <div className='personal-info__row'>
                                        <span>Ngày sinh</span>
                                        <input type="date" />
                                    </div>
                                    <button className='content__continue-button'>CONTINUE</button>
                                </div>
                                }
                                {!isGuest && 
                                    <div className='content__personal-info'>
                                        <div className='personal-info__row'>
                                            <span>Email</span>
                                            <input type="text" />
                                        </div>
                                        <div className='personal-info__row'>
                                            <span>Mật khẩu</span>
                                            <input type="password" id='password' />
                                        </div>
                                        <button className='content__continue-button'>CONTINUE</button>
                                    </div>
                                }
                            </div>
                        }
                    </div>

                    <div className='info__block'>
                        <div className='block__title' onClick={this.handleClickBlock(1)}>
                            <span>2</span>
                            <span>ĐỊA CHỈ GIAO HÀNG</span>
                        </div>
                        {currentBlock === 1 &&
                            <div className='block__content'>
                            
                            </div>
                        }
                    </div>

                    <div className='info__block'>
                        <div className='block__title' onClick={this.handleClickBlock(2)}>
                            <span>2</span>
                            <span>THANH TOÁN</span>
                        </div>
                        {currentBlock === 2 &&
                            <div className='block__content'>
                                <div className='content__pay-method'>
                                    <input type="radio" name='pay-method' value='cash' defaultChecked
                                        onChange={this.handleChangePayMethod('cash')} /> 
                                    <span>Thanh toán tiền mặt khi nhận hàng</span>
                                </div>
                                <div className='content__pay-method'>
                                    <input type="radio" name='pay-method' value='atm'
                                        onChange={this.handleChangePayMethod('atm')} /> 
                                    <span>Thẻ ATM nội địa/Internet Banking</span>
                                </div>
                                {payMethod === 'atm' &&
                                    <div className='content__banks'>
                                        {bankImages.map((bankImage, index) => 
                                            <div key={'bank' + index} className='banks__bank' href="#">
                                                <img src={bankImage} alt='Bank' />
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                        }
                    </div>

                </div>
                <div className='checkout__cart-checkout'>
                    {/* <p>Giỏ hàng của bạn</p>
                    <p>9 Sản phẩm</p>
                    <div className='cart-checkout__'>
                        
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Checkout;