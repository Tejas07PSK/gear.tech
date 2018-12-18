var express = require('express');
var router = express.Router();
const createError = require('http-errors');

/* GET home page. */
router.get('/', function(req, res) {

    res.status(200);
    res.render('index', { title: 'Express' });

});

module.exports = router;
