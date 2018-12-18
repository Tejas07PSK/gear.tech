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
const redirect = require('./routes/redirect');

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

        'content-type' : "application/json",
        'charset' : "utf-8"

    });
    next();

});

app.use('/api', function (req, res, next) {

    let url_id, url, contype;
    if (req.method === 'GET') {

        url_id = req.query['url_id'];
        if ((url_id === undefined) || (url_id === null) || (url_id === '')) {

            console.log("No \'url_id\' request parameter !!");
            res.status(406);
            res.end(

                JSON.stringify(new ro.ResObj("0", "No \'url_id\ given'. No URL retrieved !! (http - 406)", "")),
                "utf-8", function () { console.log("Http conversation ended successfully !!"); }

            );
            return;

        }
        if (!((/^[a-zA-Z0-9@*]{6}$/g).test(url_id))) {

            console.log("Invalid \'url_id\' request parameter !!");
            res.status(406);
            res.end(

                JSON.stringify(new ro.ResObj("0", "Invalid \'url_id\ request parameter passed !! (http - 406)", "")),
                "utf-8", function () { console.log("Http conversation ended successfully !!"); }

            );
            return;

        }
        return next();

    }
    else if (req.method === 'POST') {

        contype = req.headers['content-type']; url = req.body['url'];
        if ((contype === undefined) || (contype === null) || (contype !== 'application/json')) {

            res.status(400);
            res.end(

                JSON.stringify(new ro.ResObj("0", "Invalid request content type. Bad request error !! (http - 400)", "")),
                "utf-8", function () { console.log("Http conversation ended successfully !!"); }

            );
            return;

        }
        if ((url === undefined) || (url === null) || (url === '')) {

            console.log("No \'url\' request parameter !!");
            res.status(406);
            res.end(

                JSON.stringify(new ro.ResObj("0", "No \'url\' given. Nothing to shorten !! (http - 406)", "")),
                "utf-8", function () { console.log("Http conversation ended successfully !!"); }

            );
            return;

        }
        if (!((/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/ig).test(url))) {

            console.log("Mal-formed \'url\' request parameter !!");
            res.status(406);
            res.end(

                JSON.stringify(new ro.ResObj("0", "The \'url\' passed as a request parameter is mal-formed !! (http - 406)", "")),
                "utf-8", function () { console.log("Http conversation ended successfully !!"); }

            );
            return;

        }
        return next();

    }
    else {

        console.log("Http request method not allowed for the access \'URL\' !!");
        res.status(406);
        res.end(

            JSON.stringify(new ro.ResObj("0", "Http request method not allowed for the access 'URL' !! (http - 406)", "")),
            "utf-8", function () { console.log("Http conversation ended successfully !!"); }

        );

    }

});

app.use('/api', apiRouter);

app.use('/:urlid', function (req, res, next) {

    res.set({

        'content-type' : "text/html",
        'charset' : "utf-8"

    });
    next();

});

app.use('/:urlid', function (req, res, next) {

    let id = req.params['urlid'];
    if ((id === undefined) || (id === null) || !((/^[a-zA-Z0-9@*]{6}$/g).test(id)))
    {

        console.log("in");
        return next(createError(404));

    }
    next();

});

app.use('/:urlid', redirect);

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
