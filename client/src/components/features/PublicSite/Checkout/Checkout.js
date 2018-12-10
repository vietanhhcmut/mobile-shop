import React, { Component } from 'react';
import './Checkout.css';
import { bankImages } from '../../../../constants/constants';
import Cart from './Cart/Cart';
import Context from '../../../../Context';

class Checkout extends Component {
    static contextType = Context;
    state = {
        currentBlock: 0,
        payMethod: 'cash',
        user: {
            firstname: 'Đào',
            lastname: 'Mai'
        },
        isGuest: true,
        showLoginPass: false,
        showSignupPass: false,
        selectedBank: 0
    }
    componentDidMount() {
        // if (localStorage.getItem('userToken')) {
        //     axiosValidate.get('/api/user/info.php')
        //         .then(res => {
        //             this.setState({ user: res.data });
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         });
        // }
    }
    handleChooseBlock = (block) => () => {
        this.setState({ currentBlock: block });
    }
    handleChangePayMethod = (payMethod) => () => {
        this.setState({ payMethod });
    }
    handleChooseLogin = () => {
        this.setState({ isGuest: false });
    }
    handleChooseGuest = () => {
        this.setState({ isGuest: true });
    }
    handleToggleShowLoginPass = () => {
        this.setState(prevState => {
            return { showLoginPass: !prevState.showLoginPass };
        });
    }
    handleToggleShowSignupPass = () => {
        this.setState(prevState => {
            return { showSignupPass: !prevState.showSignupPass };
        });
    }
    handleOrder = () => {
        alert('Đặt hàng thành công. Chúng tôi sẽ giao hàng sớm nhất cho bạn. Cảm ơn quý khách!')
    }
    handleChooseBank = (index) => () => {
        this.setState({ selectedBank: index });
    }
    handleLogout = () => {
        localStorage.removeItem("userToken");
        this.context.handleGetCart();
        this.props.history.push('/');
    }
    render() {
        const { currentBlock, payMethod, isGuest, showSignupPass, showLoginPass, selectedBank, user } = this.state;
        if (this.context.cart.length === 0) return (
            <p>Không có sản phẩm nào trong giỏ hàng của bạn. Quay lại mua nào!</p>
        );
        else
            return (
                <div className='checkout'>
                    <div className='checkout__info'>
                        <div className='info__block'>
                            <div className='block__title' onClick={this.handleChooseBlock(0)}>
                                <span>1</span>
                                <span>THÔNG TIN CÁ NHÂN</span>
                            </div>
                            {currentBlock === 0 &&
                                user ?
                                <div className='block__content'>
                                    <p>Lấy thông tin từ tài khoản {user.lastname + ' ' + user.firstname}</p>
                                    <p>Nếu không phải là bạn.
                                    <span onClick={this.handleLogout}> Đăng xuất</span>
                                    </p>
                                </div>
                                :
                                <div className='block__content'>
                                    <div className='content__guest-or-login'>
                                        <span className={'guest-or-login ' + (isGuest ? 'guest-or-signin__active' : '')}
                                            onClick={this.handleChooseGuest}>Khách</span>
                                        |
                                    <span className={'guest-or-login ' + (isGuest ? '' : 'guest-or-signin__active')}
                                            onClick={this.handleChooseLogin}>Đăng nhập</span>
                                    </div>
                                    {isGuest ?
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
                                                    <input type={showLoginPass ? "text" : "password"} />
                                                    <button onClick={this.handleToggleShowLoginPass}>
                                                        {showLoginPass ? 'Ẩn' : 'Hiện'}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='personal-info__row'>
                                                <span>Ngày sinh</span>
                                                <input type="date" />
                                            </div>
                                            <button className='content__continue-button'
                                                onClick={this.handleChooseBlock(1)}>TIẾP TỤC</button>
                                        </div>
                                        :
                                        <div className='content__personal-info'>
                                            <div className='personal-info__row'>
                                                <span>Email</span>
                                                <input type="text" />
                                            </div>
                                            <div className='personal-info__row'>
                                                <span>Mật khẩu</span>
                                                <div className='row__password'>
                                                    <input type={showSignupPass ? "text" : "password"} />
                                                    <button onClick={this.handleToggleShowSignupPass}>
                                                        {showSignupPass ? 'Ẩn' : 'Hiện'}
                                                    </button>
                                                </div>
                                            </div>
                                            <p className='personal-info__forget-password'><span>Quên mật khẩu?</span></p>
                                            <button className='content__continue-button'
                                                onClick={this.handleChooseBlock(1)}>TIẾP TỤC</button>
                                        </div>
                                    }
                                </div>

                            }
                        </div>

                        <div className='info__block'>
                            <div className='block__title' onClick={this.handleChooseBlock(1)}>
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
                                            onClick={this.handleChooseBlock(2)}>TIẾP TỤC</button>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className='info__block'>
                            <div className='block__title' onClick={this.handleChooseBlock(2)}>
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
                                                <div key={'bank' + index}
                                                    className={'banks__bank ' + (selectedBank === index ? 'banks__active' : '')}
                                                    onClick={this.handleChooseBank(index)} >
                                                    <img src={bankImage} alt='Bank' />
                                                </div>
                                            )}
                                        </div>
                                    }
                                    <button className='content__order-button'
                                        onClick={this.handleOrder}>ĐẶT HÀNG</button>
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