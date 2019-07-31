
// Create a variable in the outer-most scope called "connection", which can default to undefined.
// It stores the active TCP connection object.
let connection;

let { MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MOVE_UP_KEY, SPECIAL_CHARACTER } = require('./constants');

const setupInput = function(conn) {

  //the "connection" variable is used to send movement commands to the server.
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //Created a function handleUserInput and registered it as the "data" callback handler for stdin.
  stdin.on('data', data => handleUserInput(data, connection))
  return stdin;
};

const handleUserInput = function(key, conn) {
  if(key === '\u0003') {
    return process.exit();
  }
  
  switch (key) {
    case 'w':
      conn.write(MOVE_UP_KEY);
      break;
    case 'a':
      conn.write(MOVE_LEFT_KEY);
      break;
    case 's':
      conn.write(MOVE_DOWN_KEY);
      break;
    case 'd':
      conn.write(MOVE_RIGHT_KEY);
      break;
    case 'f':
      conn.write(SPECIAL_CHARACTER);
      break;
    }
    return key;
};

module.exports = { setupInput }; //exported as an object
