var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var tempModel = require('../models/temp-model')
var jsonParser = bodyParser.json();
var urlEncoded = bodyParser.urlencoded({ extended: true });
var tempModel = require('../models/temp-model');

// Get all rows where the date is between datetimes
// E.g. between 10 and 12 on a certain day
// /datetime?start=2016-09-11T10:00:00.000Z&end=2016-09-11T12:00:00.000Z
router.get('/datetime/?', function(req, res, next) {
	if(req.query.start && req.query.end) {
		tempModel.tempInBetween(req.query.start, req.query.end, function (err, rows) {
			if (err) { res.sendStatus(500) }
			res.json({rows});
		})

	} else {
		res.sendStatus(400);
	}
	
});

// router.get('/above/?', function(req, res, next) {
// });

// router.get('/below/?', function(req, res, next) {
// });

module.exports = router;