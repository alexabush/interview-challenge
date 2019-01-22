import React, { Component } from 'react';

class Day extends Component {
  render() {
    let {date,day,data:{forecast, temp}} = this.props.day
    return <div className="Day">
      <p>{date}</p>
      <p>{day}</p>
      <p>Forecast: {forecast}</p>
      <p>High: {temp[0]}F</p>
      <p>Low: {temp[1]}F</p>
    </div>;
  }
}

export default Day;
