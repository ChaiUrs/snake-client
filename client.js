
const net = require('net');

const connect = () => {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
  
  conn.setEncoding('utf8'); // interpret incoming data as text
  
  conn.on('connect', () => {
  console.log('Successfully connected to game server'); //make a connection
  conn.write('Name: CPM'); //print name on game server
  });

  return conn;
}
module.exports = { connect };
