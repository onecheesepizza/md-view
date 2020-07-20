// serverless wrapper
'use strict';
const serverless = require('serverless-http');
// express
const express = require('express');
// misc
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');
const expbs = require('express-handlebars');

// index logic controller
const indexController = require('./controllers/indexController.js');

// express server
const app = express();

// view engine setup
app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../../build/src/views'));

app.use(logger('dev'));

// index route
app.use('/', indexController.index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
module.exports.handler = serverless(app);
