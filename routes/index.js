var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

/* GET home page. */

router.get('/', function(req, res, next) {
	console.log(__dirname)
 	res.render('index', { title: 'Demo' , layout:false});
});

module.exports = router;
