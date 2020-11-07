const { describe, it } = require('mocha')
const request = require('supertest')
const app = require('../../src/app')

describe('ROUTE: NOT FOUND', () => {
  describe('GET /the-url-not-found', () => {
    it('should return status 404', (done) => {
      request(app).get('/the-url-not-found').expect(404, done)
    })
  })

  describe('POST /the-url-not-found', () => {
    it('should return status 404', (done) => {
      request(app).post('/the-url-not-found').expect(404, done)
    })
  })

  describe('PUT /the-url-not-found', () => {
    it('should return status 404', (done) => {
      request(app).put('/the-url-not-found').expect(404, done)
    })
  })

  describe('DELETE /the-url-not-found', () => {
    it('should return status 404', (done) => {
      request(app).delete('/the-url-not-found').expect(404, done)
    })
  })
})
