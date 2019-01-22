import React, { Component } from 'react';

class Day extends Component {
  render() {
    let {date,day,data:{forecast, temp}} = this.props.day
    return <div className="Day">
      <p>Date: {date}</p>
      <p>Day: {day}</p>
      <p>Forcast: {forecast}</p>
      <p>Temp: {`${temp[0]} ${temp[1]}`}</p>
    </div>;
  }
}

export default Day;
