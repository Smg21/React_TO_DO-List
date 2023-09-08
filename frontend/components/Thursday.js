
import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class Thursday extends React.Component {
  render() {
    return (
      <div>
        <h2>Thursday's Todo List</h2>
        <TodoList handleToggle={this.props.handleToggle} todos={this.props.todos} />
        <Form handleAdd={this.props.handleAdd} />
        <button onClick={this.props.handleClear}>Clear Completed Todo Tasks</button>
      </div>
    );
  }
}