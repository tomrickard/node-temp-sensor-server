var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var tempModel = require('../models/temp-model')
var jsonParser = bodyParser.json();
var urlEncoded = bodyParser.urlencoded({ extended: true });
var tempModel = require('../models/temp-model');


router.get('/datetime/?', function(req, res, next) {
	console.log(req.params.start)
	console.log(req.params.end)
	if(req.query.start && req.query.end) {
		tempModel.tempInBetween(req.query.start, req.query.end, function (err, rows) {
			if (err) { res.sendStatus(500) }
			res.json({rows});
		})

	} else {
		res.sendStatus(400);
	}
	
});

router.get('/above/:start/:end', function(req, res, next) {

 	res.json({});
});

router.get('/below/:start/:end', function(req, res, next) {

 	res.json({});
});

// router.post('/', jsonParser, function (req, res, next) {
// 	// 
// });

module.exports = router;