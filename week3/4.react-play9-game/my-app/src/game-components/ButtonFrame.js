import React, { Component } from 'react';

class ButtonFrame extends Component {
    render() {

        let { checkAnswer,acceptAnswer,correct } = this.props;   
        let button;
        switch (correct) {
            case true:
                button = (
                    <button className="btn btn-lg btn-success" onClick={() => { acceptAnswer()}}>
                        <span className="glyphicon glyphicon-ok"></span>
                    </button>
                );
                break;
            case false:
                button = (
                    <button className="btn btn-lg btn-danger">
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                ); 
                break;
            default:
                button = (
                    <button className="btn btn-lg btn-primary" onClick={() => { checkAnswer()}}>
                        =
                    </button>
                );    
        }
        return (
            <div id="button-frame">
                {button}
            </div>
        );
    }
}

export default ButtonFrame;