/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 18 Dec, 2018, 09:46 PM,
        @File-Name : index.js

 */

"use strict";

const crud = require('../models/crud');
const router = (require('express')).Router();

/* GET home page. */
router.get('/', function(req, res) {

    res.status(200);
    res.render('index', { title: 'Express' });

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
                res.end(tmp, "utf-8", function () { console.log("Http conversation ended successfully !!"); });

            }
            else {

                console.log("Either an invalid \'URL\' has been passed or some internal error has occurred, or it might not exist !!");
                (crud.createDoc(genId.formId(url))).then(

                    (val) => {

                        if (val !== false) {

                            console.log(`Shortened \'key_id\' for the given URL : ${val}`);
                            res.status(200);
                            res.end(val, "utf-8", function () { console.log("Http conversation ended successfully !!"); });

                        }
                        else {

                            console.log("Either an invalid \'URL\' has been passed or some internal error has occured. URL not shortened !!");
                            res.status(500);
                            res.end("Internal Error !! (http - 500)", "utf-8", function () { console.log("Http conversation ended successfully !!"); });

                        }

                    }

                );

            }

        }

    );

});

module.exports = router;
