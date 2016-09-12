var express = require('express');
var router = express.Router();

// Returns the /static page
router.get('/?', function(req, res, next) {
 	res.render('static', { title: 'Demo' , layout:false});
});

module.exports = router;