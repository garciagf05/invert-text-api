const app = require('./../../../index.js')
const constants = require('./../../../src/constants')
const { apiPaths: { basePath, reverseTextPath } } = { ...constants }
const request = require('supertest')(app)
const expect = require('chai').expect

const apiBasePath = `${basePath}${reverseTextPath}`

describe(`GET ${reverseTextPath}`, function () {
  it('Endpoint must return reversed text', async function () {
    const queryParams = '?text=Testing'
    const response = await request.get(`${apiBasePath}${queryParams}`)
    expect(response.status).to.eql(200)
    expect(response.body).to.eql({ text: 'gnitseT', palindrome: false })
  })

  it('Endpoint must recognize palindromes with case sensitive', async function () {
    const queryParams = '?text=Radar'
    const response = await request.get(`${apiBasePath}${queryParams}`)
    expect(response.status).to.eql(200)
    expect(response.body).to.eql({ text: 'radaR', palindrome: true })
  })

  it('Endpoint must recognize palindromes with separated words', async function () {
    const queryParams = '?text=My gym'
    const response = await request.get(`${apiBasePath}${queryParams}`)
    expect(response.status).to.eql(200)
    expect(response.body).to.eql({ text: 'myg yM', palindrome: true })
  })

  it('Endpoint must recognize one character text as no palindrome', async function () {
    const queryParams = '?text=Y'
    const response = await request.get(`${apiBasePath}${queryParams}`)
    expect(response.status).to.eql(200)
    expect(response.body).to.eql({ text: 'Y', palindrome: false })
  })

  it('Should fail with status 400 in case of not receiving text', async function () {
    const queryParams = ''
    const response = await request.get(`${apiBasePath}${queryParams}`)
    expect(response.status).to.eql(400)
    expect(response.body).to.eql({ error: 'No text error' })
  })

  it('Should fail with status 400 in case of only receive spaced text', async function () {
    const queryParams = '  '
    const response = await request.get(`${apiBasePath}${queryParams}`)
    expect(response.status).to.eql(400)
    expect(response.body).to.eql({ error: 'No text error' })
  })
})
