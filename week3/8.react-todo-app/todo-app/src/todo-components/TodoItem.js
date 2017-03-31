import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class TodoItem extends Component {
    render() {
        let { todo,deleteTodo,completeTodo } = this.props;
        return (
            <li className={classnames({completed:todo.completed})}>
                <div className="view">
                    <input type="checkbox" className="toggle" checked={todo.completed} onChange={(e)=>{completeTodo(todo.id)}}/>
                    <label> {todo.text} </label>
                    <button className="destroy" onClick={(e) => { deleteTodo(todo.id)}}></button>
                </div>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo:PropTypes.func.isRequired
}; 

export default TodoItem;