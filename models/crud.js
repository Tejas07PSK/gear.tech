/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 10 Dec, 2018, 5:14 PM,
        @File-Name : crud.js

 */

const models = require("./schemasandmodels");

module.export = {

    "createDoc" : async function(obj) {

        let eff = undefined;
        await ((new models.Dashboard(obj)).save()).then(

            () => { console.log("Document insertion successful in collection \'Dashboard\'!!"); eff = obj.key_id; },
            (err) => { console.log("Document insertion failed!! ERROR!!"); console.log(err); eff = false; }

            );
        return (eff);

    }

};