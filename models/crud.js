/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 10 Dec, 2018, 5:14 PM,
        @File-Name : crud.js

 */

"use strict";

const models = require("./schemasandmodels");

let eff = undefined;

module.exports = {

    "createDoc" : async function(obj) {

        if ((typeof obj !== "object") || (obj === null)) { console.log("Invalid argument type/value error!!"); eff = false; return (eff); }
        await ((new models.Dashboard(obj)).save()).then(

                (doc) => { console.log("Document insertion successful in collection \'Dashboard\'!!"); console.log(`Newly created doc is : \n ${doc}`); eff = obj.key_id; },
                (err) => { console.log("Document insertion failed!! ERROR!!"); console.log(err); eff = false; }

            );
        return (eff);

    },
    "getUrlFromKeyId" : async function(key_id) {

       if ((typeof key_id !== "string") || (key_id === null) || (key_id === "")) { console.log("Invalid argument type/value error!!"); eff = false; return (eff); }
       await (models.Dashboard).findOne({ 'key_id' : key_id }, 'message key_id', function (err, doc) {

           if (err) { console.log("URL retrieval failed!! Error!!"); console.log(err); eff = false; }
           else if (doc !== null) { console.log("URL retrieval successful!!"); console.log(`Retrieved doc is : \n ${doc}`); eff = doc.message; }
           else { console.log("URL not found invalid \'key_id\'!!"); eff = false; }

       });
       return (eff);

    },
    "getDocFromUrl" : async function(url) {

        if ((typeof url !== "string") || (url === null) || (url === "")) { console.log("Invalid argument type/value error!!"); eff = false; return (eff); }
        await (models.Dashboard).findOne({ 'message' : url }, function (err, doc) {

            if(err) { console.log("Document retrieval failed!! Error!!"); console.log(err); eff = false; }
            else if (doc !== null) { console.log("Document retrieval successful!!"); console.log(`Retrieved doc is : \n ${doc}`); eff = true; }
            else { console.log("Document not found invalid \'URL\'!!"); eff = false; }

        });
        return (eff);

    },
    "updateDocKeyId" : async function(key_id, new_id) {

        if ((typeof key_id !== "string") || (key_id === null) || (key_id === "")) { console.log("Invalid argument type/value error!!"); eff = false; return (eff); }
        await (models.Dashboard).findOneAndUpdate({ 'key_id' : key_id }, { $set : { 'key_id' : new_id } }, function (err, doc) {

            if(err) { console.log("Document update failed!! Error!!"); console.log(err); eff = false; }
            else if (doc !== null) { console.log("Document update successful!!"); console.log(`New modified doc is : \n ${doc}`); eff = true; }
            else { console.log("Document not found invalid \'key_id\'!!"); eff = false; }

        });
        return (eff);

    },
    "deleteDocByKeyId" : async function(key_id) {

        if ((typeof key_id !== "string") || (key_id === null) || (key_id === "")) { console.log("Invalid argument type/value error!!"); eff = false; return (eff); }
        await (models.Dashboard).findOneAndDelete({ 'key_id' : key_id }, function (err, doc) {

            if(err) { console.log("Document deletion failed!! Error!!"); console.log(err); eff = false; }
            else if (doc !== null) { console.log("Document deletion successful!!"); console.log(`Following doc removed : \n ${doc}`); eff = true; }
            else { console.log("Document not found invalid \'key_id\'!!"); eff = false; }

        });
        return (eff);

    }

};