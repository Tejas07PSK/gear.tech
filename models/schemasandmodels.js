/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 10 Dec, 2018, 3:49 AM,
        @File-Name : Schemas.js

 */

"use strict";

const mongo = rquire('mongoose');
const Schema = mongo.Schema;

const coll1 = new Schema({

    "_id" : Schema.Types.ObjectId,
    "key_id" : { 'type' : String, 'unique' : true, 'required' : true },
    "message" : { 'type' : String, 'unique' : true, 'required' : true },
    "md" : {

        "hex" : { 'type' : String, 'unique' : true, 'required' : true },
        "base64" : { 'type' : String, 'unique' : true, 'required' : true }

    },
    "dateAdded" : { 'type' : Date, 'default' : Date.now() }

});

module.export = {

    "Dashboard" : mongo.model('Dashborad', coll1)

};