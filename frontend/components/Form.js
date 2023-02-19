import React from 'react';

export default class Form extends React.Component {
  handleSubmit = (e)=> {
    e.preventDefault();
    this.props.handleAdd();
    //console.log("submit");

  }
  render() {
    return (
      <form onClick={this.handleSubmit}>
        <input />
        <button>Add</button>
      </form>
    );
  }
}
