/**
 * @generateData Made-up weather data hardcoded in, formats data and writes to weather.json file
 */

const fs = require('fs');

let weatherData = [
  {
    range: '1/14-1/20',
    days: [
      ['1/14', 'Mon', 'sunny', [50, 59]],
      ['1/15', 'Tue', 'cloudy', [60, 70]],
      ['1/16', 'Wed', 'sunny', [50, 55]],
      ['1/17', 'Thur', 'sunny', [50, 55]],
      ['1/18', 'Fri', 'rainy', [47, 55]],
      ['1/19', 'Sat', 'sunny', [50, 55]],
      ['1/20', 'Sun', 'foggy', [45, 55]]
    ]
  },
  {
    range: '1/21-1/27',
    days: [
      ['1/21', 'Mon', 'foggy', [50, 59]],
      ['1/22', 'Tue', 'sunny', [47, 55]],
      ['1/23', 'Wed', 'cloudy', [50, 55]],
      ['1/24', 'Thur', 'sunny', [50, 55]],
      ['1/25', 'Fri', 'sunny', [50, 60]],
      ['1/26', 'Sat', 'sunny', [45, 55]],
      ['1/27', 'Sun', 'rainy', [50, 55]]
    ]
  },
  {
    range: '1/28-2/3',
    days: [
      ['1/28', 'Mon', 'foggy', [50, 59]],
      ['1/29', 'Tue', 'cloudy', [47, 55]],
      ['1/30', 'Wed', 'cloudy', [50, 55]],
      ['1/31', 'Thur', 'sunny', [50, 55]],
      ['1/1', 'Fri', 'cloudy', [50, 60]],
      ['1/2', 'Sat', 'sunny', [45, 55]],
      ['1/3', 'Sun', 'rainy', [50, 55]]
    ]
  }
];

let json = JSON.stringify(generateWeeks(weatherData));
fs.writeFileSync('weather.json', json);

// could organize in terms of "Months" if desired
/**
 * @param {Object[]} weeks
 * @returns {Object}
 */
function generateWeeks(weeks = []) {
  return {
    weeks: weeks.map(week => {
      return generateWeek(week);
    })
  };
}
/**
 * @param {Object} week - object with range and days keys.
 * @returns {Object}
 */
function generateWeek({ range = '', days = [] }) {
  return {
    range,
    days: days.map(day => {
      return generateDay(...day);
    })
  };
}

/**
 * @param {string} date - ex. '2/14'
 * @param {string} day - ex. 'Mon'
 * @param {string} forecast - ex. 'sunny'
 * @param {number[]} temp - low/high fahrenheit values ex. [50,70]
 * @returns {Object}
 */
function generateDay(date = '', day = '', forecast = '', temp = []) {
  return {
    date,
    day,
    data: {
      forecast,
      temp
    }
  };
}
