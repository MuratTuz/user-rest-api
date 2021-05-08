var express = require('express');
var router = express.Router();

const service = require('./services/rents-service');

/*
GET /rents
POST /rents

Rent JSON'i
{
   "movieId": 10002,
   "duration": 10,
   "person": "Hi Coders"
}
 */

/* GET all rents. */
router.get('/', function(req, res, next) {
  const rents = service.getAllRents();
  res.send(rents);
});

/* POST a rents. */
router.post('/', function(req, res, next) {
  const newRent = req.body;
  service.createRent(newRent);
  res.sendStatus(200);
});

/* DELETE a rents. */
router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  service.deleteRentById(id);
  res.sendStatus(200);
});