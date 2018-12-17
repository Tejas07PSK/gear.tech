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
//const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

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

    if (req.method === 'GET') { return next(); }
    let contype = req.headers['content-type'];
    if ((contype === undefined) || (contype === null) || (contype !== 'application/json'))
    {

        res.status(400);
        res.end(

            JSON.stringify(new ro.ResObj("0", "Invalid request content type. Bad request error !! (http - 400)", "")),
            "utf-8", function () { console.log("Http conversation ended successfully !!"); }

        );
        return ;

    }
    next();

});

app.use('/api', function (req, res, next) {

    res.set({

        'content-type' : "application/json",
        'charset' : "utf-8"

    });
    next();

});

app.use('/api', apiRouter);

app.use('/:urlid', function (req, res, next) {

    let id = req.params['urlid'];
    if ((id === undefined) || (id === null) || ((/^[a-zA-Z0-9]{6}$/).test(id)))
    {

        return next(createError(404));

    }
    next();

});

app.use('/:urlid', function (req, res, next) {

    res.set({

        'content-type' : "text/html",
        'charset' : "utf-8"

    });
    next();

});

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

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
