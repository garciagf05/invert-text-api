const constants = require('./../../../src/constants')
const iechoServices = require('./../../../src/api/iecho/service')
const { apiPaths: { reverseTextPath } } = { ...constants }
const expect = require("chai").expect;

describe(`${reverseTextPath} endpoint service`, async function () {
  it('Service should reverse a given text:', async function () {
    const result = await iechoServices('Testing')
    expect(result.status).to.eql(200);
    expect(result.response).to.eql({ text: 'gnitseT', palindrome: false });
  });

  it('Service should recognize palindrome with case sensitive', async function () {
    const result = await iechoServices('Radar')
    expect(result.status).to.eql(200);
    expect(result.response).to.eql({ text: 'radaR', palindrome: true });
  });

  it('Service should not stop on an error', async function () {
    const result = await iechoServices()
    expect(result.status).to.eql(400);
    expect(result.response).to.eql({ error: 'No text error' });
  });
})