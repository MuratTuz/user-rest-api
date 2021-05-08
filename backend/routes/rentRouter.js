var express = require('express');
var router = express.Router();

/*
Rent JSON'i
{
   "movieId": 10002,
   "duration": 10,
   "person": "Hi Coders"
}
 */

/* GET home page. */
router.get('/employees/', function(req, res, next) {
  let newArray = JSON.parse(JSON.stringify(personList))
  let list = newArray.reverse().filter( (o, i) => i<20)
  res.json(list);
});

router.post('/employees/', function(req, res, next) {
  personList.push(req.body)
  res.sendStatus(200);
});