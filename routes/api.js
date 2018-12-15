/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 15 Dec, 2018, 3:03 PM,
        @File-Name : api.js

 */

const express = require('express');
const crud = require('../models/crud');
const ro = require('../resobj');
const router = express.Router();

router.get('/', function (req, res, next) {
    
    let url_id = req.query['url_id'];
    if ((url_id === undefined) || (url_id === null) || (url_id === ''))
    {

        console.log("No \'url_id\' request parameter !!");
        res.status(204);
        res.end(

            JSON.stringify(new ro.ResObj("0", "No \'url_id\ given'. No content available !! (http - 204)", "")),
            "utf-8", function () { console.log("Http conversation ended successfully !!"); }

        );
        return next();

    }
    (crud.getUrlFromKeyId(url_id)).then(

        (tmp) => {

            console.log("Input \'key_id\' : " + url_id);
            if (tmp !== false) {

                console.log(`Original URL is : ${tmp}`);
                res.status(200);
                res.end(

                    JSON.stringify(new ro.ResObj("1", "Valid \'url_id\'. URL retrieved successfully !! (http - 200)", tmp)),
                    "utf-8", function () { console.log("Http conversation ended successfully !!"); }

                );
                return next();

            }
            else {

                console.log("Either an invalid 'url_id' has been passed or some internal error has occured. URL not found !!");
                res.status(404);
                res.end(

                    JSON.stringify(new ro.ResObj("0", "Either an invalid \'url_id\' has been passed or some internal error has occured. No URL found !! (http - 404)", "")),
                    "utf-8", function () { console.log("Http conversation ended successfully !!"); }

                );
                return next();

            }

        }

    );

});

module.exports = router;