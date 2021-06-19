const constants = require('./../../../src/constants')
const { env: { port }, apiPaths: { basePath, reverseTextPath } } = { ...constants }
const request = require("supertest")(`http://localhost:${port}${basePath}`);
const expect = require("chai").expect;

describe(`GET ${reverseTextPath}`, function () {
  it('Endpoint must return reversed text:', async function () {
    const queryParams = '?text=Testing'
    const response = await request.get(`${reverseTextPath}${queryParams}`);
    expect(response.status).to.eql(200);
    expect(response.body).to.eql({ text: 'gnitseT', palindrome: false });
  });

  it('Endpoint must recognize palindromes with case sensitive:', async function () {
    const queryParams = '?text=Radar'
    const response = await request.get(`${reverseTextPath}${queryParams}`);
    expect(response.status).to.eql(200);
    expect(response.body).to.eql({ text: 'radaR', palindrome: true });
  });

  it('Should fail with status 400 in case of not receiving text:', async function () {
    const queryParams = ''
    const response = await request.get(`${reverseTextPath}${queryParams}`);
    expect(response.status).to.eql(400);
    expect(response.body).to.eql({ error: 'No text error' });
  });
});