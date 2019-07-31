
const net = require('net');

const connect = () => {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
  
  conn.setEncoding('utf8'); // interpret incoming data as text
  return conn;
}
module.exports = { connect };
