var mysql = require('mysql');

exports.run = function (io) {
			io.on('connection', function (socket) {
				console.log('relay connected')

				socket.on('data', function (data) {
					console.log('receiving ' + data);
					socket.broadcast.emit('data', data)
				});
			})
		}


