


var express = require('express');
var router = express.Router();

var movieRouter = require('./moviesRouter');
var rentRouter = require('./rentsRouter');


router.use('/movies', movieRouter);
router.use('/rents', rentRouter);


module.exports = router;