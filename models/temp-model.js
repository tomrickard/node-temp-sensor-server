var db = require('../mysql-db.js');

exports.insert = function(temperature, datetime, done) {
  db.get().query('INSERT INTO temperature (id, temperature, date) VALUES(?, ?, ?)', ['Null', temperature, datetime], function(err, result) {
    if (err) return done(err)
    done(null, result.insertId)
  })
}

exports.getAll = function(done) {
  db.get().query('SELECT * FROM temperature', function (err, rows) {
    if (err) return done(err)
    done(null, rows)
  })
}

exports.tempInBetween = function(datetime_start, datetime_end , done) {
  db.get().query('SELECT * FROM temperature WHERE date > ? AND date < ?', [datetime_start, datetime_end], function (err, rows) {
    if (err) return done(err)
    done(null, rows)
  })
}

exports.tempThresholdAbove = function(datetime_start, datetime_end , done) {
  db.get().query('SELECT * FROM temperature WHERE temperature > ?', [temperature], function (err, rows) {
    if (err) return done(err)
    done(null, rows)
  })
}

exports.tempThresholdBelow = function(temperature, done) {
  db.get().query('SELECT * FROM temperature WHERE temperature < ?', [temperature], function (err, rows) {
    if (err) return done(err)
    done(null, rows)
  })
}

// // Split timestamp into [ Y, M, D, h, m, s ]
// var t = "2010-06-09 13:12:01".split(/[- :]/);

// // Apply each element to the Date function
// var d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));

// console.log(d);
// // -> Wed Jun 09 2010 14:12:01 GMT+0100 (BST)