var express = require('express');
var router = express.Router();

// local data, would be replaced by database
const fs = require('fs');
let rawdata = fs.readFileSync('./weather.json');
let data = JSON.parse(rawdata);

/* GET home page. */
router.get('/', function(req, res, next){
  res.json({
    weeks: data.weeks
  })
});

module.exports = router;
