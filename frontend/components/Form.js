import React from 'react';

export default class Form extends React.Component {
  //Setting Up State
  constructor(){
    super();
    this.state = {
      input: ""
    }
  }


  handleSubmit = (e)=> {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
    //console.log("submit");make sure you click submit

  }

  //Making Handle Change Event 
  handleChange = (e) => {
    this.setState({
      ...this.state,
      input:e.target.value
    });
  }
  render() {
    //console.log(this.state.input);
    return (
      <form onClick={this.handleSubmit}>
        <input onChange = {this.handleChange} />
        <button>Add</button>
      </form>
    );
  }
}
