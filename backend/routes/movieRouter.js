var express = require('express');
var router = express.Router();

/**
GET /movies
GET /movies/:id
POST /movies/
PUT /movies/:id
DELETE /movies/:id
GET /rents
POST /rents

Sonuncu API methodunda film kiralama islemini de yapmanizi istiyoruz
Movie JSON'u
{
  "id": 10002
  "name": "die hard",
  "year": "1999",
  "genre": "action",
  "income": 10000000
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