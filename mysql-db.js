var mysql = require('mysql');

var pool = null;

exports.connect = function (done) {
	pool  = mysql.createPool({
	  connectionLimit : 10,
	  host: 'localhost',
	  user: 'root',
	  password: 'test',
	  database: 'temperature'
	});
}

exports.get = function () {
	return pool;
}