/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 10 Dec, 2018, 5:14 PM,
        @File-Name : crud.js

 */

const models = require("./schemasandmodels");

let eff = undefined;
module.export = {

    "createDoc" : async function(obj) {

        await ((new models.Dashboard(obj)).save()).then(

                () => { console.log("Document insertion successful in collection \'Dashboard\'!!"); eff = obj.key_id; },
                (err) => { console.log("Document insertion failed!! ERROR!!"); console.log(err); eff = false; }

            );
        return (eff);

    },
    "getUrlFromKeyId" : async function(key_id) {

       await (models.Dashboard).findOne({ 'key_id' : key_id }, 'message', function (err, doc) {

           if(err) { console.log("URL retrieval failed!! Error!!"); console.log(err); eff = false; }
           else { console.log("URL retrieval successful!!"); eff = doc.message; }

       });
       return (eff);

    },
    "getDocFromUrl" : async function(msg) {

        await (models.Dashboard).findOne({ 'message' : msg }, function (err) {

            if(err) { console.log("Document retrieval failed!! Error!!"); console.log(err); eff = false; }
            else { console.log("Document retrieval successful!!"); eff = true; }

        });
        return (eff);

    },
    "updateDocKeyId" : async function(key_id, new_id) {

        await (models.Dashboard).findOneAndUpdate({ 'key_id' : key_id }, { $set : { 'key_id' : new_id } }, function (err) {

            if(err) { console.log("Document update failed!! Error!!"); console.log(err); eff = false; }
            else { console.log("Document update successful!!"); eff = true; }

        });
        return (eff);

    }

};