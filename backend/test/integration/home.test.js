const request = require('supertest')
const { describe, it } = require('mocha')
const app = require('../../src/app')

describe('ROUTE: HOME', () => {
  describe('GET /', () => {
    it('should return status 200', (done) => {
      request(app).get('/').expect(200, done)
    })
  })
})
