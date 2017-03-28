import React, { Component } from 'react';

class NumbersFrame extends Component {
    render() {

        let numbers = [];
        let { selectNumber , selectedNumbers,usedNumbers} = this.props;
        for (let i = 1; i <= 9; i++){
            let className = 'number selected-' + (selectedNumbers.indexOf(i) > -1);
            className+=" used-"+(usedNumbers.indexOf(i) > -1);     
            numbers.push(
                <span key={i}
                      className={className}
                      onClick={() => { selectNumber(i); }}>
                {i}
                </span>
            );
        }

        return (
            <div id="numbers-frame" className="alert alert-danger">
                <div className="well">
                    {numbers}
                </div>
            </div>
        );
    }
}

export default NumbersFrame;