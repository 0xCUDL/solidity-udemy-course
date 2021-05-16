const assert = require('assert');
const ganache = require('ganache-cli');
// The constructor function for web3
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

class Car {
	park() {
		return 'stopped';
	}
	
	drive() {
		return 'zoom zoom';
	}
}

describe('Car', () => {
	it('can park', () => {
		const c = new Car();
		assert.equal(c.park(), 'stopped');
	});
});