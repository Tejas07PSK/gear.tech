/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 11 Dec, 2018, 2:40 AM,
        @File-Name : unitTest.js

 */

"use strict";

const conn = require("./dbconnectmanage");
const ops = require("./crud");
const test_obj = {

    'key_id' : "e60g*N",
    'message' : "https://www.gog.com",
    'md' : { 'hex' : "58020fa83f3791f597ec3eb99e614fea1d42e607", 'base64' : "FgCD6g*N5H1l@w@uZ5hT@odQuYH" },
    'dateAdded' : Date.now()

};
let inpKeyId = "qs223ery", inpURL = "gog.com", updtKeyId = "gst32";

(async () => { await conn.open() })();

//(ops.createDoc(test_obj)).then((res) => { if (res !== false) { console.log(`Shortened URL Id : ${res}`); } else { console.log("URL not shortened !!"); } });

//(ops.getUrlFromKeyId(inpKeyId)).then((res) => { console.log("Input \'key_id\' : " + inpKeyId); if (res !== false) { console.log(`Original URL is : ${res}`); } else { console.log("Invalid \'key_id\', URL not found !!"); } });

//(ops.getDocFromUrl(inpURL)).then((res) => { console.log("Input URL : " + inpURL); if (res !== false) { console.log("URL already exists !!"); } else { console.log("URL does not exist !!"); } });

//(ops.updateDocKeyId(inpKeyId, updtKeyId)).then((res) => { console.log("Input \'key_id\' : " + inpKeyId + "\nNew updated \'key_id\' : " + updtKeyId); console.log("Update promise resolved !!"); console.log(`Status : ${res}`); });

//(ops.deleteDocByKeyId(updtKeyId)).then((res) => { console.log("Input \'key_id\' : " + updtKeyId); console.log("Deletion promise resolved !!"); console.log(`Status : ${res}`); });

