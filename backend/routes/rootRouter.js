


var express = require('express');
var router = express.Router();

var movieRouter = require('./movieRouter');
var rentRouter = require('./rentRouter');


router.use('/movies', movieRouter);
router.use('/rent', rentRouter);


module.exports = router;