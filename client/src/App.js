import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { message: 'Default Message' }

  componentDidMount() {
    fetch(`http://localhost:3001/api/`)
      .then(res => res.json())
      .then(data => {
        console.log('got data from server');
        this.setState({ message: data.message });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.message}
      </div>
    );
  }
}

export default App;
