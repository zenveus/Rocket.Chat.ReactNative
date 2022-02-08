const { expect } = require('chai');

describe('Simple App testing', () => {
	beforeEach(() => {
		$('~app-root').waitForDisplayed(11000, false);
	});

	it('Valid Login Test', async => {
		expect(1).to.equal(1);
	});
});
