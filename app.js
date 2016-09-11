var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var routes = require('./routes/index');
var temp = require('./routes/temp');
var live = require('./routes/live');
var static = require('./routes/static');

var db = require('./mysql-db')

var app = express();

/*--------------------------------------------
 * Template Engine - Handlebars
 *--------------------------------------------
*/
var hbs = require('hbs');
// hbs.registerHelper('helper_name', function(...) { ... });
hbs.registerPartials(__dirname + '/views/partials');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/*--------------------------------------------
 * Routes
 *--------------------------------------------
*/

// Static
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Dynamic
app.use('/', routes);
app.use('/temp', temp);
app.use('/live', live);
app.use('/static', static);

/*--------------------------------------------
 * Connect to MySQL Database
 *--------------------------------------------
*/

db.connect(function (err) {
  if(err) {
    console.log('Cannot connect to database');
  }
})

/*--------------------------------------------
 * Error Handling
 *--------------------------------------------
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
