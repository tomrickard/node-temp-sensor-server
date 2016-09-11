var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var tempModel = require('../models/temp-model')
var jsonParser = bodyParser.json();
var urlEncoded = bodyParser.urlencoded({ extended: true });

/* GET home page. */

router.get('/', function(req, res, next) {
	console.log(__dirname)
 	res.render('index', { title: 'Demo' , layout:false});
});

// router.post('/', jsonParser, function (req, res, next) {
// 	// 
// });

module.exports = router;