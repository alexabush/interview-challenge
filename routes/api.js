var express = require('express');
var router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./weather.json');
// let rawdata = fs.readFileSync('./data.json');
let data = JSON.parse(rawdata);
console.log(data);

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('sending data from server');
  res.json({
    weeks: data.weeks
  })
});

module.exports = router;
