
const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = () => {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  
  conn.setEncoding('utf8'); // interpret incoming data as text
  
  conn.on('connect', () => {
  console.log('Successfully connected to game server'); //make a connection
  conn.write('Name: CPM'); //print name on game server
  setInterval(() => {
    conn.write('Name: CPM');
  }, 5000);
  });

  conn.on('data', data => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = { connect };
