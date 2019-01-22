const fs = require('fs');

let rawData = [
  [
    ['', 'mon', 'sunny', [50,59]],
    ['', 'tue', 'cloudy', [60,70]],
    ['', 'wed', 'sunny', [50,55]],
    ['', 'thur', 'sunny', [50,55]],
    ['', 'fri', 'rainy', [47,55]],
    ['', 'sat', 'sunny', [50,55]],
    ['', 'sun', 'foggy', [45,55]],
  ],
  [
    ['', 'mon', 'foggy', [50,59]],
    ['', 'tue', 'sunny', [47,55]],
    ['', 'wed', 'cloudy', [50,55]],
    ['', 'thur', 'sunny', [50,55]],
    ['', 'fri', 'sunny', [50,60]],
    ['', 'sat', 'sunny', [45,55]],
    ['', 'sun', 'rainy', [50,55]],
  ],
]

let month = generateWeeks(rawData)
let data = JSON.stringify(month);
fs.writeFileSync('weather.json', data)

// could organize in terms of "months" if desired
function generateWeeks(weeks = []) {
  return {
      weeks: weeks.map(week => {
      return generateWeek(week)
    })
  }
}

function generateWeek(days = []) {
  return {
      days: days.map(day => {
      return generateDay(...day)
    })
  }
}

function generateDay(date = '', day = '', forecast = '', temp = []) {
  return {
    date,
    day,
    data: {
      forecast,
      temp
    }
  }
}