import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './todo-components/Header';
import MainSection from './todo-components/MainSection';

// import todosActions from './actions/todos';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Learn .js', completed: true },
        { id: 2, text: 'Learn React', completed: false },
        { id: 3, text: 'Learn ??', completed: false }
      ]
    };
  }

  _addTodo(text) {
    let { todos } = this.state;
    let nextId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id) + 1, 0);
    todos = [{ id: nextId, text, completed: false }, ...todos];
    this.setState({todos});
  }
  _deleteTodo(id) {
    let { todos } = this.state;
    todos = todos.filter(todo => todo.id !== id);
    this.setState({todos});
  }
  _completeTodo(id) {
    let { todos } = this.state;
    todos = todos.map(todo => { 
      return todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
    this.setState({todos});
  }
  _completeAll() {
    let { todos } = this.state;
    let allAreMArked = todos.every(todo => todo.completed);
    todos = todos.map(todo => { 
      return Object.assign({}, todo, { completed: !allAreMArked });
    });
    this.setState({todos});
  }
   
  render() {
    let { todos } = this.state;
    return (
      <div className="todoapp">
        <Header addTodo={(text) => { this._addTodo(text) }}/>
        <MainSection todos={todos}
          deleteTodo={(id) => { this._deleteTodo(id) }}
          completeTodo={(id) => { this._completeTodo(id) }}
          completeAll={() => { this._completeAll()}}
        />
      </div>
    );
  }
}

export default App;
