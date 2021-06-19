const constants = require('./../../../src/constants')
const iechoServices = require('./../../../src/api/iecho/service')
const { apiPaths: { reverseTextPath } } = { ...constants }
const expect = require('chai').expect

describe(`${reverseTextPath} endpoint service`, async function () {
  it('Service should reverse a given text:', async function () {
    const result = await iechoServices('Testing')
    expect(result.status).to.eql(200)
    expect(result.response).to.eql({ text: 'gnitseT', palindrome: false })
  })

  it('Service should recognize palindrome with case sensitive:', async function () {
    const result = await iechoServices('Radar')
    expect(result.status).to.eql(200)
    expect(result.response).to.eql({ text: 'radaR', palindrome: true })
  })

  it('Service should recognize palindrome with case sensitive:', async function () {
    const result = await iechoServices('My gym')
    expect(result.status).to.eql(200)
    expect(result.response).to.eql({ text: 'myg yM', palindrome: true })
  })

  it('Service should recognize 1 character text as no palindrome:', async function () {
    const result = await iechoServices('x')
    expect(result.status).to.eql(200)
    expect(result.response).to.eql({ text: 'x', palindrome: false })
  })

  it('Service should not stop when text is a number:', async function () {
    const result = await iechoServices(2)
    expect(result.status).to.eql(200)
    expect(result.response).to.eql({ text: '2', palindrome: false })
  })

  it('Service should not stop when text is a boolean:', async function () {
    const result = await iechoServices(true)
    expect(result.status).to.eql(200)
    expect(result.response).to.eql({ text: 'eurt', palindrome: false })
  })

  it('Service should response error when text is spaces only:', async function () {
    const result = await iechoServices('   ')
    expect(result.status).to.eql(400)
    expect(result.response).to.eql({ error: 'No text error' })
  })

  it('Service should not stop when text is null:', async function () {
    const result = await iechoServices(null)
    expect(result.status).to.eql(400)
    expect(result.response).to.eql({ error: 'No text error' })
  })

  it('Service should not stop when text is undefined:', async function () {
    const result = await iechoServices(undefined)
    expect(result.status).to.eql(400)
    expect(result.response).to.eql({ error: 'No text error' })
  })

  it('Service should not stop on an error:', async function () {
    const result = await iechoServices()
    expect(result.status).to.eql(400)
    expect(result.response).to.eql({ error: 'No text error' })
  })
})
