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

           if(err) { console.log("Document retrieval failed!! Error!!"); console.log(err); eff = false; }
           else { console.log("Document retrieval successful!!"); eff = doc.message; }
       });
       return (eff);

    },

};