


const express = require('express');
const router = express.Router();

const movieRouter = require('./moviesRouter');
const rentRouter = require('./rentsRouter');


router.use('/movies', movieRouter);
router.use('/rents', rentRouter);


module.exports = router;