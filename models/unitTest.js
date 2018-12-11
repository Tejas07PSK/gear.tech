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

(async () => { await conn.open() })();

let res = undefined;

res = ops.createDoc(test_obj);
//res = ops.deleteDocByKeyId("qs223ery");

if (res !== false) { console.log(`Shortened URL Id : ${res}`); } else { console.log("URL not shortened!!"); }