#!/usr/bin/env node

/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 02 Dec, 2018, 12:46 PM,
        @File-Name : www.js

 */

// 'www' dependency-vars.

const app = require('../app');
const debug = require('debug')('gear.tech:server');
const http = require('http');

// Parse port-number from environment and store in 'express'.

const port = normalizePort(process.env.PORT || '8000');

// Parse 'port' into a number, string, or false.

function normalizePort(val)
{

    let port = parseInt(val, 10);
    if (isNaN(port)) { /* named pipe */ return(val); }
    else if (port >= 0) { /* port number */ return (port); }
    return (false);

}

app.set('port', port);

// Create and set-up 'HTTP' server.

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Event listener for HTTP server "error" event.

function onError(error)
{

  if ((error.syscall) !== 'listen') { throw (error); }
  let bind = ((typeof port === 'string') ? ('Pipe ' + port) : ('Port ' + port));

  // handle specific listen errors with friendly messages
  switch (error.code)
  {

    case 'EACCES' : console.error(bind + ' - requires elevated privileges');
                    process.exit(1);
                    break;
    case 'EADDRINUSE' : console.error(bind + ' - is already in use');
                        process.exit(1);
                        break;
    default : throw (error);

  }

}

// Event listener for HTTP server "listening" event.

function onListening()
{

  let addr = server.address(), bind = ((typeof addr === 'string') ? ('pipe ' + addr) : ('port ' + addr.port));
  debug('Listening on - ' + bind);

}
