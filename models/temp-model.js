var db = require('../mysql-db.js');

// All vales are escaped automatically - don't panic

// Adds a temperature datum 
exports.insert = function(temperature, datetime, done) {
  db.get().query('INSERT INTO temperature (id, temperature, date) VALUES(?, ?, ?)', ['Null', temperature, datetime], function(err, result) {
    if (err) return done(err)
    done(null, result.insertId)
  })
}

// Returns all rows where the temperature is inbetween the limits
exports.tempInBetween = function(lower_threshold, upper_threshold , done) {
  db.get().query('SELECT * FROM temperature WHERE date > ? AND date < ?', [lower_threshold, upper_threshold], function (err, rows) {
    if (err) return done(err)
    done(null, rows)
  })
}


// Returns all rows where the temperature above threshold
exports.tempThresholdAbove = function(threshold, done) {
  db.get().query('SELECT * FROM temperature WHERE temperature > ?', [threshold], function (err, rows) {
    if (err) return done(err)
    done(null, rows)
  })
}

// Returns all rows where the temperature below threshold
exports.tempThresholdBelow = function(temperature, done) {
  db.get().query('SELECT * FROM temperature WHERE temperature < ?', [threshold], function (err, rows) {
    if (err) return done(err)
    done(null, rows)
  })
}