import React, { Component } from 'react';
import './App.css';
import Week from './Week';

class App extends Component {
  state = {
    weeks: []
  };

  componentDidMount() {
    fetch(`http://localhost:3001/api/`)
      .then(res => res.json())
      .then(({ weeks }) => {
        console.log('data', weeks);
        this.setState({
          weeks
        });
      });
  }

  render() {
    console.log('App');
    let weeksUI = this.state.weeks.map(({days}) => {
      return <Week days={days} />;
    });
    return (
      <div className="App">
        {weeksUI}
      </div>
    );
  }
}

export default App;
