var expect = require('chai').expect

describe('test string', () => {
  context('string of a number', () => {
    it('be a string', () => {
      expect('1').to.be.a('string')
    })
  })
})
