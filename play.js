
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
  conn.setEncoding('utf8'); // interpret incoming data as text
  return conn;
}
console.log('Connecting ...');
connect();
