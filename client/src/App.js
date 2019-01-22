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
        this.setState({
          weeks
        });
      });
  }

  render() {
    console.log('App');
    let weeksUI = this.state.weeks.map(({range, days}) => {
      return <Week range={range} days={days} />;
    });
    return (
      <div className="App">
        <h1>Weather App</h1>
        {weeksUI}
      </div>
    );
  }
}

export default App;
