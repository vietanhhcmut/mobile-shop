import React, { Component } from 'react';
import './Checkout.css';
import { bankImages } from '../../../../constants/constants';
import Cart from './Cart/Cart';
import Context from '../../../../Context';
import axiosValidate from '../../../../constants/axiosValidate';
import axios from '../../../../constants/axiosInstance';
import { Link } from 'react-router-dom';

class Checkout extends Component {
    static contextType = Context;
    state = {
        currentBlock: 0,
        payMethod: 'cash',
        user: null,
        guest: {
            name: '',
            gender: true,
            email: ''
        },
        showLoginPass: false,
        showSignupPass: false,
        selectedBank: 0,
        address: {
            city: '',
            district: '',
            wards: '',
            street: '',
            phonenumber: ''
        }
    }
    componentDidMount() {
        if (localStorage.getItem('userToken')) {
            axiosValidate().get('/api/user/getInfoUser.php')
                .then(res => {
                    this.setState({ user: res.data });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
    handleChooseBlock = (block) => () => {
        if (block > this.state.currentBlock) return;
        this.setState({ currentBlock: block });
    }
    handleChangePayMethod = (payMethod) => () => {
        this.setState({ payMethod });
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
        const { user, address, guest, payMethod } = this.state;
        if (user) {
            axiosValidate().post('/api/order/userAdd.php', {
                ...address,
                totalPrice: this.context.totalPrice,
                name: user.firstname + ' ' + user.lastname,
                gender: user.gender,
                email: user.email,
                paid: payMethod === 'cash' ? false : true
            })
                .then(res => {
                    if (res.status === 200) {
                        alert('Đặt hàng thành công. Chúng tôi sẽ giao hàng sớm nhất cho bạn. Cảm ơn quý khách!');
                        this.context.handleGetCart();
                        this.props.history.push("/");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
            axios.post('/api/order/guestAdd.php', {
                cart: this.context.cart,
                ...address,
                totalPrice: this.context.totalPrice,
                ...guest,
                paid: payMethod === 'cash' ? false : true
            })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data);
                        localStorage.removeItem('cart');
                        alert('Đặt hàng thành công. Chúng tôi sẽ giao hàng sớm nhất cho bạn. Cảm ơn quý khách!');
                        this.context.handleGetCart();
                        this.props.history.push("/");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
    handleChooseBank = (index) => () => {
        this.setState({ selectedBank: index });
    }
    handleLogout = () => {
        localStorage.removeItem("userToken");
        this.context.handleGetCart();
        this.props.history.push('/');
    }
    handleChangeAddress = (type) => (e) => {
        const address = { ...this.state.address };
        address[type] = e.target.value;
        this.setState({ address });
    }
    handleChangeGuest = (type) => (e) => {
        const guest = { ...this.state.guest };
        guest[type] = e.target.value;
        this.setState({ guest });
    }
    handleContinue = (block) => (e) => {
        e.preventDefault();
        this.setState({ currentBlock: block });
    }
    handleChangeGender = (gender) => () => {
        const guest = { ...this.state.guest };
        guest['gender'] = gender;
        this.setState({ guest });
    }
    render() {
        const { currentBlock, payMethod, selectedBank, user, address, guest } = this.state;
        if (this.context.cart.length === 0) return (
            <div>
                <p style={{ margin: '20px auto', textAlign: 'center' }}>
                    <em>Không có sản phẩm nào trong giỏ hàng của bạn. Quay lại mua nào!</em>
                </p>
                <Link to='/' className='left-side__continue-shopping'>
                    <i className="material-icons">keyboard_arrow_left</i>
                    <span>Tiếp tục mua hàng</span>
                </Link>
            </div>
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
                                (user ?
                                    <div className='block__content'>
                                        <p>Lấy thông tin từ tài khoản <Link to='/info'>{user.lastname + ' ' + user.firstname}</Link></p>
                                        <p>Nếu không phải là bạn.<span onClick={this.handleLogout}> Đăng xuất</span></p>
                                        <button className='content__continue-button' style={{ margin: '0 auto' }}
                                            onClick={this.handleContinue(1)}>TIẾP TỤC</button>
                                    </div>
                                    :
                                    <form className='block__content' onSubmit={this.handleContinue(1)}>
                                        <div className='content__personal-info'>
                                            <div className='personal-info__row'>
                                                <span>Họ và tên</span>
                                                <input type="text" required
                                                    value={guest.name}
                                                    onChange={this.handleChangeGuest('name')} />
                                            </div>
                                            <div className='personal-info__row'>
                                                <span>Giới tính</span>
                                                <div className='row__gender'>
                                                    <span><input type="radio" name='gender' defaultChecked
                                                        onChange={this.handleChangeGender(true)} /> Nam</span>
                                                    <span><input type="radio" name='gender'
                                                        onChange={this.handleChangeGender(false)} /> Nữ</span>
                                                </div>
                                            </div>
                                            <div className='personal-info__row'>
                                                <span>Email</span>
                                                <input type="text"
                                                    value={guest.email}
                                                    onChange={this.handleChangeGuest('email')} />
                                            </div>

                                            <button className='content__continue-button' type='submit'>TIẾP TỤC</button>
                                        </div>
                                    </form>
                                )}
                        </div>

                        <form className='info__block' onSubmit={this.handleContinue(2)}>
                            <div className='block__title' onClick={this.handleChooseBlock(1)}>
                                <span>2</span>
                                <span>ĐỊA CHỈ GIAO HÀNG</span>
                            </div>
                            {currentBlock === 1 &&
                                <div className='block__content'>
                                    <div className='content__personal-info'>
                                        <div className='personal-info__row'>
                                            <span>Tỉnh/Thành phố</span>
                                            <input type="text" required
                                                value={address.city}
                                                onChange={this.handleChangeAddress('city')} />
                                        </div>
                                        <div className='personal-info__row'>
                                            <span>Quận/Huyện</span>
                                            <input type="text" required
                                                value={address.district}
                                                onChange={this.handleChangeAddress('district')} />
                                        </div>
                                        <div className='personal-info__row'>
                                            <span>Phường/Xã</span>
                                            <input type="text" required
                                                value={address.wards}
                                                onChange={this.handleChangeAddress('wards')} />
                                        </div>
                                        <div className='personal-info__row'>
                                            <span>Số nhà, Đường</span>
                                            <input type="text" required
                                                value={address.street}
                                                onChange={this.handleChangeAddress('street')} />
                                        </div>
                                        <div className='personal-info__row'>
                                            <span>Số điện thoại</span>
                                            <input type="text" required
                                                value={address.phonenumber}
                                                onChange={this.handleChangeAddress('phonenumber')} />
                                        </div>
                                        <button className='content__continue-button' type='submit'>TIẾP TỤC</button>
                                    </div>
                                </div>
                            }
                        </form>

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