import React, { Component } from 'react';

class CurrentTime extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.currentTime}</div>;
  }
}

export default CurrentTime;









