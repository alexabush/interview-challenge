import React, { Component } from 'react';
import Day from './Day'

class Week extends Component {
  render() {
    console.log('Week');
    let daysUI = this.props.days.map(day => {
      return <Day day={day}></Day>
    })
    return <div className="Week">
      {daysUI}
    </div>;
  }
}

export default Week;
