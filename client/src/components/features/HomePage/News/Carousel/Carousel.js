import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    state = {
        currentSlide: 0,
        sliding: false,
        direction: null,
        strike: 1,
        order: [0, 1, 2, 3]
    }
    getOrder = (itemIndex) => {
        const { currentSlide } = this.state
        const { children } = this.props
        const numItems = 4;
        if (itemIndex - currentSlide < 0) {
            return numItems - Math.abs(itemIndex - currentSlide)
        }
        return itemIndex - currentSlide;
        
    }
    doSliding = (direction, index, strike, currentSlide) => {
        let { order } = this.state;
        if (direction === 'prev') 
            order = order.map(el => {
                if (el + 3 - order[currentSlide] > 3) return  3 - order[currentSlide] - (4 - el); 
                return el +  3 - order[currentSlide];
            });
        else 
            order = order.map(el => {
                if (el - order[currentSlide] < 0) return 4 - (order[currentSlide]  - el);
                return el - order[currentSlide];
            });

            this.setState({
                sliding: true,
                currentSlide: index,
                direction,
                order
            })

        setTimeout(() => {
            this.setState({
                sliding: false
            })
        }, 50)
    }
    handleMovePrev = () => {
        this.setState({strike : 1});
        const { currentSlide } = this.state;
        const { children } = this.props;
        const numItems = 4;
        this.doSliding('prev', currentSlide === 0 ? numItems - 1 : currentSlide - 1, 1, currentSlide);
    }
    handleMoveNext = () => {
        // this.setState(prevState => {
        //     return {
        //         currentSlide: prevState.currentSlide + 1
        //     };
        // });
        this.setState({strike : 1});
        const { currentSlide } = this.state;
        const { children } = this.props;
        const numItems = 4;
        this.doSliding('next', currentSlide === numItems - 1 ? 0 : currentSlide + 1, 1, currentSlide);
    }
    handleMoveToSlide = (index) => () => {
        const { currentSlide } = this.state;
        const { children } = this.props;
        const numItems = 4;

        if (index > currentSlide) {
            const strike = index - currentSlide;
            this.setState({direction: 'next', strike});
            this.doSliding('next', index, strike, currentSlide);
        }
        else {
            const strike = currentSlide - index;
            this.setState({direction: 'prev', strike});
            this.doSliding('prev', index, strike, currentSlide);
        }

        // let strikeNext = 1, strikePrev = 1, direction = null;

        // if (index > currentSlide) {
        //     strikeNext = index - currentSlide;
        // }
        // else strikeNext = numItems - currentSlide + index;

        // if (currentSlide > index) {
        //     strikePrev = currentSlide - index;
        // }
        // else strikePrev = currentSlide + numItems - index;

        // if (strikeNext > strikePrev) {
        //     direction = 'prev';
        //     this.setState({ strike: strikePrev, direction });
        // }
        // else {
        //     direction = 'next';
        //     this.setState({ strike: strikeNext, direction });
        // }
        // console.log(strikeNext, strikePrev, direction);
        
    }

    render() {
        const { currentSlide, strike, direction, order, sliding } = this.state;
        const slideCount = 4;
        const slidWidth = 100.0 / slideCount;

        let translate = null;
        if (direction === 'next') {
            if (!sliding) translate = 'translateX(-' + strike +  '00%)';
            else translate = 'translateX(0%)';
        }
        else if (direction === 'prev') {
            if (!sliding) translate = 'translateX(' + (-3 + strike) +  '00%)';
            else translate = 'translatex(-' + 3 + '00%)';
        }
        
        // else 
        // if (!this.state.sliding) translate = 'translateX(-' + this.state.strike +  '00%)';
        // else if (this.state.direction === 'prev') translate = 'translateX(-' + (this.state.strike + 1) +  '00%)';
        // else translate = 'translateX(0%)';

        const style = {
            transition: this.state.sliding ? 'none' : 'all 0.8s ease-in-out',
            transform: translate
        }
        return (
            <div className='carousel'>
                <div className='wrapper'  style={style}>
                    <div className='slide' style={{ order: order[0]}}>
                        <img src="https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/leoslideshow/slide-1.jpg" alt="image1" />
                    </div>
                    <div className='slide' style={{ order: order[1] }}>
                        <img src="https://demo4leotheme.com/prestashop/leo_mobile/themes/leo_mobile/assets/img/modules/leoslideshow/slide-2.jpg" alt="image2" />
                    </div>
                    <div className='slide' style={{ order: order[2] }}>
                        <img src="http://thuthuatphanmem.vn/uploads/2018/04/10/hinh-anh-dep-ve-tinh-yeu-54_052634251.jpg" alt="image3" />
                    </div>
                    <div className='slide' style={{ order: order[3] }}>
                        <img src="https://dantricdn.com/thumb_w/640/2018/anh-drone-1-1514880827496.jpg" alt="image3" />
                    </div>
                </div>
                <i className='arrow left-arrow material-icons' onClick={this.handleMovePrev}>keyboard_arrow_left</i>
                <i className='arrow right-arrow material-icons' onClick={this.handleMoveNext}>keyboard_arrow_right</i>
                <div className='dots'>
                    {
                        [...Array(slideCount)].map((el, index) => {
                            return <span key={'dot' + index} onClick={this.handleMoveToSlide(index)}
                                className={this.state.currentSlide === index ? 'active' : ''}></span>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Carousel; 