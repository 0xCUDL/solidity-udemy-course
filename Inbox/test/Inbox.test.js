const assert = require('assert');
const ganache = require('ganache-cli');
// The constructor function for web3
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
let accounts;
beforeEach(async () => {
	// return list of all accounts
	accounts = await web3.eth.getAccounts();
	// use an account to deploy contract
	console.log(accounts)
});

describe('Inbox', () => {
	it('deploys a contract', () => {});
})