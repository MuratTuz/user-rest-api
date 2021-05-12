

import express from 'express';
//const express = require('express');
var router = express.Router();

import moviesRouter from './moviesRouter';
import rentsRouter from './rentsRouter';
//const movieRouter = require('./moviesRouter');
//const rentRouter = require('./rentsRouter');


router.use('/movies', moviesRouter);
router.use('/rents', rentsRouter);

export default router;