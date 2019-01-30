'use strict';

require('dotenv').config();
require('app-module-path').addPath(__dirname);

const app = require('express')();
const helmet = require('helmet')();
const createError = require('http-errors');
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(helmet);

app.use(bodyParser.json({
    limit: '50mb',
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
}));

// app.use(passport.initialize());

require('routes/index')(app, passport);

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
    next();
});

module.exports = app;
