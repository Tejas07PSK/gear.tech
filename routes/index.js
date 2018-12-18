/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 18 Dec, 2018, 09:46 PM,
        @File-Name : index.js

 */

"use strict";

const crud = require('../models/crud');
const router = (require('express')).Router();
const createError = require('http-errors');

/* GET home page. */
router.get('/', function(req, res) {

    res.status(200);
    res.render('index', { title: 'Express' });

});

module.exports = router;
