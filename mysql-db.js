var mysql = require('mysql');

var pool = null;

// Create a connection pool
exports.connect = function (done) {
	pool  = mysql.createPool({
	  connectionLimit : 10,
	  host: 'localhost',
	  user: 'root',
	  password: 'test',
	  database: 'sensors'
	});
	done();
}

// Get a connect from the pool
exports.get = function () {
	return pool;
}
