import React, { Component } from 'react';
import './DetailedItem.css';

class DetailedItem extends Component {
    state = {
        num: [1, 2, 3, 4, 5, 6]
    }
    handleState = i => () => {
        const num = this.state.num;
        num[i] = num[i] + 1;
        this.setState({
            num
        });
    }
    render() {
        console.log(this.state.num);
        return (
            <div>
                Click to the number
                {
                    this.state.num.map((n, i) => (
                        <div key={n + 3*i} className="item-detail" onClick={this.handleState(i)}> {n} </div>
                    ))
                }
            </div>
        );
    }
}

export default DetailedItem;