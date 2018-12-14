/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 02 Dec, 2018, 12:46 PM,
        @File-Name : www.js

 */

"use strict";

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// set-up view engines
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ 'extended' : true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', function (req, res, next) {

    /*var contype = req.headers['content-type'];
    if (!contype || contype.indexOf('application/json') !== 0)
        return res.send(400);*/
    next(createError(400));

});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {

    next(createError(404));

});

// error handler
app.use(function (err, req, res, next) {

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = ((req.app.get('env') === 'development') ? err : {});

    // render the error page
    res.status(err.status || 500);
    res.render('error');

});

module.exports = app;
