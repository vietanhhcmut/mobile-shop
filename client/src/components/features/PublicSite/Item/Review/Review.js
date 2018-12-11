import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './Review.css';
import axios from '../../../../../constants/axiosInstance';
import axiosValidate from '../../../../../constants/axiosValidate';

class Review extends Component {
    state = {
        review: {
            name: '',
            email: '',
            content: ''
        },
        reviews: [],
        user: null
    }
    componentDidMount() {
        axios.get(`/api/review/getProductReviews.php?productId=${this.props.productId}`)
            .then(res => {
                this.setState({ reviews: res.data });
            })
            .catch(err => {
                console.log(err);
            });
        
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
    handleAddReview = (e) => {
        e.preventDefault();
        const { user, review } = this.state;
        let newReview = null;
        console.log(user);
        if (user) {
            newReview = {
                name: user.firstname + ' ' + user.lastname,
                email: user.email,
                content: review.content,
                productId: this.props.productId
            }
        }
        else {
            newReview = {
                ...this.state.review,
                productId: this.props.productId,
            };
        }
        axios.post('/api/review/add.php', newReview)
            .then(res => {
                if (res.status === 200) {
                    const reviews = [...this.state.reviews];
                    reviews.push(res.data);
                    this.setState({ reviews })
                }
            })
            .catch(err => {
                console.log(err);
            });
    
    }
    handleChange = (type) => (e) => {
        const review = { ...this.state.review };
        review[type] = e.target.value;
        this.setState({ review });
    }
    handleCalcTime = (createdAt) => {
        const reviewTime = new Date(createdAt);
        const timeNow = new Date();
        const diff = (timeNow.getTime() - reviewTime.getTime()) / 1000;
        if (diff < 60) return Math.floor(diff) + ' giây trước';
        else if (diff < 3600) return Math.floor(diff / 60) + ' phút trước';
        else if (diff < 3600 * 24) return Math.floor(diff / 3600) + ' giờ trước';
        else if (diff < 3600 * 24 * 30) return Math.floor(diff / (3600 * 24)) + ' ngày trước';
        else if (diff < 3600 * 24 * 30 * 12) return Math.floor(diff / (3600 * 24 * 30)) + ' tháng trước';
        else return Math.floor(diff / (3600 * 24 * 30 * 12)) + ' năm trước';
    }
    render() {
        const { review, user } = this.state;
        const reviews = this.state.reviews.map((review, index) => (
            <div className="review" key={index}>
                <div className="review__img" key={index}>
                    <img src={'https://hoanghamobile.com/Content/v2.0/images/no-avt.png'} alt="user" />
                </div>
                <div className="review__info">
                    <p><b>{review.name}</b> - {this.handleCalcTime(review.createdAt)}</p>
                    <div className="review__content">
                        {review.content}
                    </div>
                </div>
            </div>
        ));
        return (
            <div>
                <form className="do-review" onSubmit={this.handleAddReview}>
                    {!user &&
                        <input type="text" placeholder="Họ tên của bạn" value={review.name} required
                            onChange={this.handleChange('name')} />
                    }
                    {!user &&
                        <input type="text" placeholder="Email của bạn" value={review.email}
                            onChange={this.handleChange('email')} />
                    }
                    <textarea
                        placeholder="Mời bạn nhập câu hỏi hoặc đánh giá cho sản phẩm"
                        cols="30" rows="10" required
                        value={review.content}
                        onChange={this.handleChange('content')} />
                    <Button variant="contained" type='submit'> Gửi bình luận </Button>
                </form>
                <div className="review-number">{this.state.reviews.length} bình luận và đánh giá</div>
                <div className="reviews">
                    {reviews}
                </div>
            </div>
        );
    }
}

export default Review;