import React, { Component } from 'react';
import './Checkout.css';
import { bankImages } from '../../../../constants/constants';
import Cart from './Cart/Cart';

class Checkout extends Component {
    state = {
        currentBlock: 0,
        payMethod: 'cash',
        signIn: true,
        isGuest: true
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
                            <span>3</span>
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
                <Cart />
            </div>
        );
    }
}

export default Checkout;