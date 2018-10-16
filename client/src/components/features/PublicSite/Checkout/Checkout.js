import React, { Component } from 'react';
import './Checkout.css';
import { bankImages } from '../../../../constants/constants';
import Cart from './Cart/Cart';

class Checkout extends Component {
    state = {
        currentBlock: 0,
        payMethod: 'cash',
        signIn: true,
        isGuest: true,
        showPasswordSignUp: false,
        showPasswordSignIn: false
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
    handleClickTogglePasswordSignUp = () => {
        this.setState(prevState => {
            return { showPasswordSignUp: !prevState.showPasswordSignUp };
        });
    }
    handleClickTogglePasswordSignIn = () => {
        this.setState(prevState => {
            return { showPasswordSignIn: !prevState.showPasswordSignIn };
        });
    }
    render() {
        const { currentBlock, payMethod, isGuest, showPasswordSignIn, showPasswordSignUp } = this.state;
        return (
            <div className='checkout'>
                <div className='checkout__info'>
                    <div className='info__block'>
                        <div className='block__title' onClick={this.handleClickBlock(0)}>
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
                                            <span>Họ và tên</span>
                                            <input type="text" />
                                        </div>
                                        <div className='personal-info__row'>
                                            <span>Giới tính</span>
                                            <div className='row__gender'>
                                                <span><input type="radio" name='gender' defaultChecked /> Nam</span>
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
                                            <div className='row__password'>
                                                <input type={showPasswordSignUp ? "text" : "password"} />
                                                <button onClick={this.handleClickTogglePasswordSignUp}>
                                                    {showPasswordSignUp ? 'Ẩn' : 'Hiện'}
                                                </button>
                                            </div>
                                        </div>
                                        <div className='personal-info__row'>
                                            <span>Ngày sinh</span>
                                            <input type="date" />
                                        </div>
                                        <button className='content__continue-button'
                                            onClick={this.handleClickBlock(1)}>TIẾP TỤC</button>
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
                                            <div className='row__password'>
                                                <input type={showPasswordSignIn ? "text" : "password"} />
                                                <button onClick={this.handleClickTogglePasswordSignIn}>
                                                    {showPasswordSignIn ? 'Ẩn' : 'Hiện'}
                                                </button>
                                            </div>
                                        </div>
                                        <p className='personal-info__forget-password'><span>Quên mật khẩu?</span></p>
                                        <button className='content__continue-button'
                                            onClick={this.handleClickBlock(1)}>TIẾP TỤC</button>
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
                                <div className='content__personal-info'>
                                    <div className='personal-info__row'>
                                        <span>Tỉnh/Thành phố</span>
                                        <input type="text" />
                                    </div>
                                    <div className='personal-info__row'>
                                        <span>Quận/Huyện</span>
                                        <input type="text" />
                                    </div>
                                    <div className='personal-info__row'>
                                        <span>Phường/Xã</span>
                                        <input type="text" />
                                    </div>
                                    <div className='personal-info__row'>
                                        <span>Số nhà, Đường</span>
                                        <input type="text" />
                                    </div>
                                    <div className='personal-info__row'>
                                        <span>Số điện thoại</span>
                                        <input type="text" />
                                    </div>
                                    <button className='content__continue-button'
                                        onClick={this.handleClickBlock(2)}>TIẾP TỤC</button>
                                </div>
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