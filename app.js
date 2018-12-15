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
const ro = require('./resobj');
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

    res.set({

        'Content-Type' : "application/json",
        'Content-Length' : "8192",
        'charset' : "UTF-8"

    });
    next();

});

app.use('/api', function (req, res, next) {

    let contype = req.headers['Content-Type'];
    if ((contype === undefined) || (contype === null) || (contype !== 'application/json'))
    {

        res.status(400);
        res.end(

            JSON.stringify(new ro.ResObj("0", "Invalid request content type. Bad request error !! (http - 400)", "")),
            "UTF-8", function () { console.log("Http conversation ended successfully !!"); }
        );
        return;

    }
    next();

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
