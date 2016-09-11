var tempModel = require('./models/temp-model');

exports.open = function (io) {
	io.on('connection', function (socket) {
		console.log('relay connected')

		
		socket.on('temp', function (data) {
			console.log('receiving ' + data.datetime + ' ' + data.temp);

			// Send to all connected browsers
			socket.broadcast.emit('data', data)

			// Add to database
			
			tempModel.insert(data.temp, data.datetime, function (err, result) {
				if(err) {
					console.log('Error writing to database');
					console.log(err);
				}
				console.log(result);
			});

		});

		// // Trigger for temperature data
		// socket.on('temp', function (data) {
		// 	console.log('receiving temp: ' + data);

		// 	// Send to all connected browsers
		// 	socket.broadcast.emit('data', data)

		// 	// Add to database
		// 	tempModel.insert(data.temp, data.datetime, function (err) {
		// 		if(err) {
		// 			console.log('Error writing to database')
		// 			console.log(err)
		// 		}
		// 	});
		// });

	})
}

// This module is called from wwwio not app.js


