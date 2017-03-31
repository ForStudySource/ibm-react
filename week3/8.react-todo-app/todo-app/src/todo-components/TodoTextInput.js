import React, { Component,PropTypes } from 'react';

class TodoTextInput extends Component {

    submitHandler(e) {
        if (e.which === 13) {
            console.log('enter key pressed...');
            let todoText = e.target.value;
            this.props.onSubmitHandler(todoText);
            e.target.value = '';
        }
    }    
    render() {
        return (
            <input className="new-todo"
                onKeyUp={(e) => { this.submitHandler(e)}}    
            />
        );
    }
}

TodoTextInput.propTypes = {
    onSubmitHandler:PropTypes.func.isRequired
};

export default TodoTextInput;