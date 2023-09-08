import React from 'react';

export default class Form extends React.Component {
  // Setting Up State
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);

    // Clear the input field
    this.setState({
      input: ""
    });
  }

  // Making Handle Change Event
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input} // Bind input value to state
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
