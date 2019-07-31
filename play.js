
const { connect } = require('./client');
const {setupInput} = require('./input');

console.log('Connecting to the game server...');

//send the connection object returned from connect() into our setupInput() function.

setupInput(connect());
