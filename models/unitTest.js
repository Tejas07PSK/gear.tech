/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 11 Dec, 2018, 2:40 AM,
        @File-Name : unitTest.js

 */

"use strict";

const conn = require("./dbconnectmanage");
const ops = require("./crud");
const test_obj = {

    'key_id' : "qs223ery",
    'message' : "gog.com",
    'md' : { 'hex' : "23eewrty", 'base64' : "Aeerty65" },
    'dateAdded' : Date.now()

};
let inpKeyId = "qs223ery", inpURL = "gog.com", updtKeyId = "gst32";

(async () => { await conn.open() })();

(ops.createDoc(test_obj)).then((res) => { if (res !== false) { console.log(`Shortened URL Id : ${res}`); } else { console.log("URL not shortened!!"); } });

(ops.getUrlFromKeyId("qs223ery")).then((res) => { if (res !== false) { console.log(`Original URL is : ${res}`); } else { console.log("Invalid 'key_id', URL not found!!"); } });

(ops.getDocFromUrl("gog.com")).then((res) => { if (res !== false) { console.log("URL already exists!!"); } else { console.log("URL does not exist!!"); } });

(ops.updateDocKeyId("qs223ery", "gst32")).then((res) => { console.log("Update promise resolved!!"); console.log(`Status : ${res}`); });

(ops.deleteDocByKeyId("gst32")).then((res) => { console.log("Deletion promise resolved!!"); console.log(`Status : ${res}`); });

