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
  const id = Number(req.params.id);
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
  const updatedMovieId = Number(req.params.id);
  const updatedMovieBody = req.body;
  const updatedMovie = service.updateMovieById(updatedMovieId, updatedMovieBody);
  if (updatedMovie) res.status(200).send(updatedMovie);
  else res.sendStatus(404);
});

/* DELETE a movie by id */
router.delete('/:id', function (req, res, next) {
  const id = Number(req.params.id);
  const newMovies = service.deleteMovieById(id);
  if (newMovies) res.status(200).send(newMovies);
  else res.sendStatus(404);
});

module.exports = router;