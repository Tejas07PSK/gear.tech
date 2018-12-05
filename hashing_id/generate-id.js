/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 05 Dec, 2018, 2:36 AM,
        @File-Name : generate-id.js.js

 */

"use strict";

const hash = require("./sha-1");

function getRandomInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);

}

function logic(hex, base64, uidx1, uidx2)
{

    const loop = function (idx, uidx, str) {

        if ((idx + 2) > uidx) { return (str.substring((idx - 2), (idx + 1))); }
        else { return (str.substring(idx, (idx + 3))); }

    };
    let index1 = getRandomInclusive(0, uidx1), index2 = getRandomInclusive(0, uidx2);
    return (loop(index1, uidx1, hex) + loop(index2, uidx2, base64));


}

module.exports = new Object();
(module.exports).formId = function(message){

    if ((message === null) || (message === undefined)) { console.log("Error!! Incompatible variable type."); return (null); }
    let obj = hash.sha1(message);
    if (obj === null) { return (null); }
    obj.key_id = logic((obj.md).hex, (obj.md).base64, (((obj.md).hex).length - 1), (((obj.md).base64).length - 1));
    return (obj);

};