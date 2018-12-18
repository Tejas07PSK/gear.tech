/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 18 Dec, 2018, 6:19 AM,
        @File-Name : redirect.js.js

 */

"use strict";

const crud = require('../models/crud');
const router = (require('express')).Router({ mergeParams : true });

router.get('/', function (req, res, next) {

    let id = req.params['urlid'];
    (crud.getUrlFromKeyId(id)).then(

        (tmp) => {

            console.log("Input \'key_id\' : " + id);
            if (tmp !== false) {

                console.log(`Original URL is : ${tmp}`);
                res.redirect(302, tmp);
                return;

            }
            console.log("Either an invalid \'urlid\' has been passed or some internal error has occurred. URL not found !!");
            res.status(404);
            return next();

        }

    );

});

module.exports = router;