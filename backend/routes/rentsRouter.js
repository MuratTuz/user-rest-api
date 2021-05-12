import express from 'express';
//const express = require('express');
var router = express.Router();

import * as service from '../services/rents-service';
//const service = require('./services/rents-service');

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
  res.sendStatus(200).send(newRent);
});

/* DELETE a rents. */
router.delete('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const newRents = service.deleteRentById(id);
  if (newRents) res.status(200).send(newRents);
  else res.sendStatus(404);
});

export default router;