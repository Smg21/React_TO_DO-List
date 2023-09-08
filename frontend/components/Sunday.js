import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class Sunday extends React.Component {
  render() {
    return (
      <div>
        <h2>Sunday's Todo List</h2>
        <TodoList handleToggle={this.props.handleToggle} todos={this.props.todos} />
        <Form handleAdd={this.props.handleAdd} />
        <button onClick={this.props.handleClear}>Clear Completed Todo Tasks</button>
      </div>
    );
  }
}