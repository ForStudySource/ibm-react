import React, { Component,PropTypes } from 'react';

import TodoTextInput from './TodoTextInput'

class Header extends Component {

    submitHandler(text) {
        if (text) {
            this.props.addTodo(text);
        }
    }

    render() {
        return (
            <header>
                <h1>todos</h1>
                <TodoTextInput onSubmitHandler={(text) => { this.submitHandler(text) }}/>
            </header>
        );
    }
}

Header.propTypes = {
    addTodo: PropTypes.func.isRequired
}


export default Header;