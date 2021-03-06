const path = require('path');
const fs = require('fs');
const solc = require('solc');
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// Must export the contract in the compile script as bounded to Inbox
module.exports = solc.compile(source,1).contracts[':Inbox'];