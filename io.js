var tempModel = require('./models/temp-model');

exports.open = function (io) {

	io.on('connection', function (socket) {
		console.log('client connected')

		/*----------------------------------------------------------------------------------
		* Receive data from Raspberry Pi
		**---------------------------------------------------------------------------------*/
		socket.on('temp', function (data) {
			console.log('receiving ' + data.date + ' ' + data.temperature);

			// Send to all connected browsers
			socket.broadcast.emit('temp', data)

			// Add temperature to database
			tempModel.insert(data.temperature, data.date, function (err, result) {
				if(err) {
					console.log('Error writing to database');
					console.log(err);
				}
				console.log(result);
			});

		});

	})
}

// This module is called from wwwio not app.js


