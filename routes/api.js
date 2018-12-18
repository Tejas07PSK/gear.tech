/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 15 Dec, 2018, 3:03 PM,
        @File-Name : api.js

 */

"use strict";

const crud = require('../models/crud');
const ro = require('../resobj');
const genId = require('../hashing_id/generate-id');
const router = (require('express')).Router();

router.get('/', function (req, res) {

    let url_id = req.query['url_id'];
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

            }
            else {

                console.log("Either an invalid \'url_id\' has been passed or some internal error has occurred. URL not found !!");
                res.status(404);
                res.end(

                    JSON.stringify(new ro.ResObj("0", "Either an invalid \'url_id\' has been passed or some internal error has occurred. No URL found !! (http - 404)", "")),
                    "utf-8", function () { console.log("Http conversation ended successfully !!"); }

                );

            }

        }

    );

});

router.post('/', function (req, res) {

    let url = req.body['url'];
    (crud.getDocFromUrl(url)).then(

        (tmp) => {

            console.log("Input \'URL\' : " + url);
            if (tmp !== false) {

                console.log("Shortened-id of the requested url already exists !!");
                console.log(`\'key_id\' of the URL is : ${tmp}`);
                res.status(200);
                res.end(

                    JSON.stringify(new ro.ResObj("1", "Valid \'URL\', but it was already shortened before. URL \'key_id\' successfully found !! (http - 200)", tmp)),
                    "utf-8", function () { console.log("Http conversation ended successfully !!"); }

                );

            }
            else {

                console.log("Either an invalid \'URL\' has been passed or some internal error has occurred, or it might not exist !!");
                (crud.createDoc(genId.formId(url))).then(

                    (val) => {

                        if (val !== false) {

                            console.log(`Shortened \'key_id\' for the given URL : ${val}`);
                            res.status(200);
                            res.end(

                                JSON.stringify(new ro.ResObj("1", "Valid \'URL\'. URL \'key_id\' successfully generated !! (http - 200)", val)),
                                "utf-8", function () { console.log("Http conversation ended successfully !!"); }

                            );

                        }
                        else {

                            console.log("Either an invalid \'URL\' has been passed or some internal error has occured. URL not shortened !!");
                            res.status(500);
                            res.end(

                                JSON.stringify(new ro.ResObj("0", "Either an invalid \'URL\' has been passed or some internal error has occurred. URL not shortened !! (http - 500)", "")),
                                "utf-8", function () { console.log("Http conversation ended successfully !!"); }

                            );

                        }

                    }

                );

            }

        }

    );

});

module.exports = router;