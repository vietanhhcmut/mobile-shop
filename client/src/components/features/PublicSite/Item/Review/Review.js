import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './Review.css';

class Review extends Component {
    state = {
        reviews: [
            {
                user: {
                    name: 'Lê Hữu Việt Anh',
                    img: 'https://hoanghamobile.com/Content/v2.0/images/no-avt.png',
                },
                time: '4 giờ trước',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus dolorum dolore tempore! Incidunt fugit nobis, fuga tempore placeat modi hic nihil iste quod, dignissimos illum? Veritatis magni tenetur ipsa.'
            },
            {
                user: {
                    name: 'Lê Hữu Việt Anh',
                    img: 'https://hoanghamobile.com/Content/v2.0/images/no-avt.png',
                },
                time: '4 giờ trước',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus dolorum dolore tempore! Incidunt fugit nobis, fuga tempore placeat modi hic nihil iste quod, dignissimos illum? Veritatis magni tenetur ipsa.'
            },
            {
                user: {
                    name: 'Lê Hữu Việt Anh',
                    img: 'https://hoanghamobile.com/Content/v2.0/images/no-avt.png',
                },
                time: '4 giờ trước',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus dolorum dolore tempore! Incidunt fugit nobis, fuga tempore placeat modi hic nihil iste quod, dignissimos illum? Veritatis magni tenetur ipsa.'
            }
        ]
    }
    render() {
        const reviews = this.state.reviews.map((review, index) => (
            <div className="review">
                <div className="review__img" key={index}>
                    <img src={review.user.img} alt="user"/>
                </div>
                <div className="review__info">
                    <p><b>{review.user.name}</b> - {review.time}</p>
                    <div className="review__content">
                        {review.content}
                    </div>
                </div>
            </div>
        ));
        return (
            <div>
                <div className="do-review">
                    <input type="text" placeholder="Họ tên của bạn"/>
                    <input type="text" placeholder="Email của bạn"/>
                    <textarea 
                        placeholder="Mời bạn nhập câu hỏi hoặc đánh giá cho sản phẩm"
                        cols="30" rows="10" />
                    <Button variant="contained"> Gửi bình luận </Button>
                </div>
                <div className="review-number">{this.state.reviews.length} bình luận và đánh giá</div>
                <div className="reviews">
                    {reviews}
                </div>
            </div>
        );
    }
}

export default Review;