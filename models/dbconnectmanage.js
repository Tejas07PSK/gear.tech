/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 07 Dec, 2018, 8:57 AM,
        @File-Name : DbConnectManage.js

 */

"use strict";

const mongo = require("mongoose");
const db = mongo.connection;
const url = (process.env.DB_URL) || ("mongodb://localhost:27017/gearUrlShortener");
const options = {

    bufferCommands : true,
    user : (process.env.DB_USERNAME) || ("palashsarkar"),
    pass : (process.env.DB_PASSWORD) || ("tejas!!"),
    autoIndex: false,
    //dbName : "gearUrlShortener",
    useNewUrlParser : true,
    useCreateIndex : false,
    useFindAndModify : true,
    autoReconnect : true,
    reconnectTries : Number.MAX_VALUE,
    reconnectInterval : 200,
    poolSize : 10,
    bufferMaxEntries : -1,
    connectTimeoutMS : 30000,
    socketTimeoutMS : 30000,
    family : 4

};

async function start()
{

    await (mongo.connect(url, options)).then(() => { console.log("Promise for connection resolved !!"); }, (err) => { console.log("Promise for connection rejected !!"); console.log("Mongoose encountered an ERROR while connecting : default mode !!"); console.log(err); });

}

async function stop()
{

    await (mongo.disconnect()).then(() => { console.log("Promise for disconnection resolved !!"); }).catch((err) => { console.log("Promise for disconnection rejected !!"); console.log(err); });
    // mongo.connection.close();

}

//(async () => { await start() })();

mongo.connection.on('reconnect', function () { console.log("Mongoose reconnected to : " + url); });
mongo.connection.on('connected', function () { console.log("Mongoose default connection open to : " + url + "............."); console.log("Connection Successful !!"); });
mongo.connection.on('disconnected', function () { console.log("Mongoose default connection closed to : " + url); console.log("Disconnected !!"); });
mongo.connection.on('reconnectFailed', function () { console.log("Mongoose failed to reconnect to : " + url); console.log("Ran out of retries."); });
//mongo.connection.on('error', function (err) { console.log("Mongoose encountered an ERROR while connecting : default mode !!"); console.log(err); });
process.on('SIGINT', async function () { await stop(); console.log('Mongoose default connection disconnected through app termination !!'); process.exit(0); });

module.exports = { "open" : start , "close" : stop, "getDb" : function () { return (db); } };