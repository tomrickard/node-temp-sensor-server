var express = require('express');
var router = express.Router();

// Returns the /live page
router.get('/', function(req, res, next) {
 	res.render('live', {layout:false});
});

module.exports = router;