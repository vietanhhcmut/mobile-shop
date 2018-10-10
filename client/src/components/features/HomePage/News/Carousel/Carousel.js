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
    doSliding = (direction, currentSlide, oldSlide, strike) => {
        const numSlide = this.props.children.length;
        const x = numSlide - oldSlide;
        const order = (direction === 'next') ?
            [...Array(oldSlide).keys()].map(_ => _ + x).concat([...Array(x).keys()])
            :
            [...Array(oldSlide + 1).keys()].map(_ => _ + x - 1).concat([...Array(x - 1).keys()]);

        this.setState({
            currentSlide,
            sliding: true,
            direction,
            strike,
            order
        });

        setTimeout(() => {
            this.setState({ sliding: false });
        }, 10);
    }
    handleClickPrev = () => {
        if (!Array.isArray(this.props.children)) return;
        const { currentSlide } = this.state;
        const numSlide = this.props.children.length;
        this.doSliding('prev', currentSlide === 0 ? numSlide - 1 : currentSlide - 1, currentSlide, 1);
    }
    handleClickNext = () => {
        if (!Array.isArray(this.props.children)) return;
        const { currentSlide } = this.state;
        const numSlide = this.props.children.length;
        this.doSliding('next', currentSlide === numSlide - 1 ? 0 : currentSlide + 1, currentSlide, 1);
    }
    handleClickIndicator = (index) => () => {
        if (!Array.isArray(this.props.children)) return;
        const { currentSlide } = this.state;
        if (index > currentSlide) {
            const strike = index - currentSlide;
            this.doSliding('next', index, currentSlide, strike);
        }
        else {
            const strike = currentSlide - index;
            this.doSliding('prev', index, currentSlide, strike);
        }
    }

    render() {
        const { currentSlide, direction, strike, sliding, order } = this.state;
        let { children } = this.props;
        if (!Array.isArray(children)) children = [children];
        const numSlide = children.length;
        let translate = '';
        if (direction === 'next') {
            if (sliding) translate = 'translateX(0%)';
            else translate = 'translateX(-' + strike + '00%)';
        }
        else if (direction === 'prev') {
            if (sliding) translate = 'translatex(-' + (numSlide - 1) + '00%)';
            else translate = 'translateX(' + (-(numSlide - 1) + strike) + '00%)';
        }
        const wrapperStyle = {
            transition: this.state.sliding ? 'none' : 'all 0.8s ease-in-out',
            transform: translate
        }
        return (
            <div className='news-carousel'>
                <div className='news-carousel__wrapper' style={wrapperStyle}>
                    {children.map((child, index) =>
                        <div key={'slide' + index} className='wrapper__slide' style={{ order: order[index] }}>
                            {child}
                        </div>
                    )}
                </div>
                <i className='news-carousel__arrow news-carousel__left-arrow material-icons'
                    onClick={this.handleClickPrev}>keyboard_arrow_left</i>
                <i className='news-carousel__arrow news-carousel__right-arrow material-icons'
                    onClick={this.handleClickNext}>keyboard_arrow_right</i>
                <div className='news-carousel__dots'>
                    {
                        [...Array(numSlide)].map((el, index) => {
                            return <span key={'dot' + index} onClick={this.handleClickIndicator(index)}
                                className={currentSlide === index ? 'dots__active' : ''}></span>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Carousel; 