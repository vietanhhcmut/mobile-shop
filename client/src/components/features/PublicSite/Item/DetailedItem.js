import React, { Component } from 'react';
import './DetailedItem.css';

class DetailedItem extends Component {
    state = {
        num: [1, 2, 3, 4, 5, 6]
    }
    handleState = i => () => {
        const num = this.state.num;
        num[i] = num[i] + 1;
        console.log(num);
        this.setState({
            num
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.num.map((n, i) => (
                        <div key={n + i} className="item-detail" onClick={this.handleState(i)}> {n} </div>
                    ))
                }
            </div>
        );
    }
}

export default DetailedItem;