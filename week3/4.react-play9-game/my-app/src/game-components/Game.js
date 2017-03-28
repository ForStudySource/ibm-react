import React, { Component } from 'react';

import StarsFrame from './StarsFrame';
import ButtonFrame from './ButtonFrame';
import AnswerFrame from './AnswerFrame';
import NumbersFrame from './NumbersFrame';

import _ from 'lodash';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedNumbers: [],
            usedNumbers:[],
            numOfStars: (Math.floor(Math.random() * 9)) + 1,
            correct:null
        };
    }    

    selectNumber(num) {
        if (this.state.selectedNumbers.indexOf(num) === -1 && this.state.usedNumbers.indexOf(num) === -1) {
            this.setState({ selectedNumbers: this.state.selectedNumbers.concat(num) });
        }    
    }
    unSelectNumber(num) {
        let { selectedNumbers } = this.state;
        let idx = selectedNumbers.indexOf(num);
        selectedNumbers.splice(idx, 1);
        this.setState({selectedNumbers});
    }
    sumOfSelectedNumbers() {
        let { selectedNumbers } = this.state;
        return selectedNumbers.reduce(function (s, n) { 
            return s + n;
        },0);
    }
    checkAnswer() {
        let { numOfStars } = this.state;
        let correct = (numOfStars === this.sumOfSelectedNumbers());
        this.setState({correct});
    }
    acceptAnswer() {
        this.setState({
            correct: null,
            usedNumbers: this.state.usedNumbers.concat(this.state.selectedNumbers),
            selectedNumbers: [],
            numOfStars:(Math.floor(Math.random() * 9)) + 1
        });
    }

    render() {
        let { selectedNumbers,usedNumbers,numOfStars,correct } = this.state;
        return (
            <div>
                <div className="page-header"> Play-9</div>
                <div className="clearfix">
                    <StarsFrame numOfStars={numOfStars}/>
                    <ButtonFrame checkAnswer={this.checkAnswer.bind(this)}
                        acceptAnswer={this.acceptAnswer.bind(this)}    
                        correct={correct} />
                    <AnswerFrame unSelectNumber={this.unSelectNumber.bind(this)}
                        selectedNumbers={selectedNumbers} />
                </div>    
                <NumbersFrame selectedNumbers={selectedNumbers}
                    usedNumbers={usedNumbers}    
                    selectNumber={this.selectNumber.bind(this)} />
            </div>
        );
    }
}

export default Game;