import React from 'react'

export default class Todo extends React.Component {

  handleClick = () => {
    //console.log("handl click", this.props.todo (or id));
    this.props.handleToggle();
  }

  render() {
    return (
      <li onClick={this.handleClick}>{this.props.todo.task} {this.props.todo.completed?<span>- completed</span> : <span></span>}</li>
    )
  }
}

