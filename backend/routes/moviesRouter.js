const express = require('express');
const router = express.Router();

const service = require('./services/movies-service');

/**
GET /movies
GET /movies/:id
POST /movies/
PUT /movies/:id
DELETE /movies/:id

/* GET all movies. */
router.get('/', function(req, res, next) {
  const moviesList = service.getAllMovies();
  res.send(moviesList);
});

/* GET movie by id. */
router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  const movie = service.getMovieById(id);
  res.send(movie);
});

/* POST new movie */
router.post('/', function (req, res, next) {
  const newMovie = req.body;
  service.createMovie(newMovie);
  res.status(201).send(newMovie);
});

/* PUT update a movie */
router.put('/:id', function (req, res, next) {
  const updatedMovieId = req.params.id;
  const updatedMovieBody = req.body;
  const updatedMovie = service.updateMovieById(updatedMovieId, updatedMovieBody);
  res.status(200).send(updatedMovie);
});

/* DELETE a movie by id */
router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  service.deleteMovieById(id);
  res.sendStatus(200);
});

module.exports = router;