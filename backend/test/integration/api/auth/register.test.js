const request = require('supertest');
const { expect } = require('chai');

const app = require('../../../../src/app');

const msgValidate = 'Unprocessable Entity';

describe('ROUTE: REGISTER | POST /api/v1/register', () => {
  describe('Validate Name', () => {
    it('should return status 422: name required', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: undefined,
          username: 'test_error_name',
          email: 'test_error_name@test.com',
          password: 'password',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].name).to.be.equal(
            'Name is required'
          );

          done();
        });
    });

    it('should return status 422: name mush match regex', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: '1234',
          username: 'test_error_name',
          email: 'test_error_name@test.com',
          password: 'password',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].name).to.be.equal(
            'Only can contain letters or spaces'
          );

          done();
        });
    });
  });

  describe('Validate Username', () => {
    it('should return status 422: username required', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: 'wak wau',
          username: undefined,
          email: 'test_error_name@test.com',
          password: 'password',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].username).to.be.equal(
            'Username is required'
          );

          done();
        });
    });

    it('should return status 422: username mush match regex', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: 'wak wau',
          username: 'as',
          email: 'test_error_name@test.com',
          password: 'password',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].username).to.be.equal(
            'Username must follow the rules'
          );

          done();
        });
    });

    it('should return status 422: username mush match regex', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: 'wak wau',
          username: 'as',
          email: 'test_error_name@test.com',
          password: 'password',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].username).to.be.equal(
            'Username must follow the rules'
          );

          done();
        });
    });

    it('should return status 422: username mush match regex', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: 'wak wau',
          username: 'test_no_verify',
          email: 'test_error_name@test.com',
          password: 'password',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].username).to.be.equal(
            'Username has been used.'
          );

          done();
        });
    });
  });

  describe('Validate Email', () => {
    it('should return status 422: email required', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: 'wak wau',
          username: 'alap_alap',
          email: undefined,
          password: 'password',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].email).to.be.equal(
            'Email is required'
          );

          done();
        });
    });

    it('should return status 422: email must valid', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: 'wak wau',
          username: 'alap_alap',
          email: 'Must be a valid email address',
          password: 'password',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].email).to.be.equal(
            'Must be a valid email address'
          );

          done();
        });
    });

    it('should return status 422: email max 50', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: 'wak wau',
          username: 'alap_alap',
          email:
            'this_email_address_very_very_long_long_long@gmail.com',
          password: 'password',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].email).to.be.equal(
            'Must be no more than 50'
          );

          done();
        });
    });

    it('should return status 422: email max 50', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: 'wak wau',
          username: 'alap_alap',
          email: 'test@test.com',
          password: 'password',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].email).to.be.equal(
            'Email has been used.'
          );

          done();
        });
    });
  });

  describe('Validate Password', () => {
    it('should return status 422: password required', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: 'ah ah ah',
          username: 'test_error_password',
          email: 'test_error_name@test.com',
          password: undefined,
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].password).to.be.equal(
            'Password is required'
          );

          done();
        });
    });

    it('should return status 422: password min 6', (done) => {
      request(app)
        .post('/api/v1/register')
        .set('Accept', 'application/json')
        .send({
          name: 'ah ah ah',
          username: 'test_error_password',
          email: 'test_error_name@test.com',
          password: '23456',
        })
        .end((_err, res) => {
          expect(res.status).to.eq(422);
          expect(res.body.status).to.eq('error');
          expect(res.body.message).to.be.equal(msgValidate);
          expect(res.body.results[0].password).to.be.equal(
            'Must be at least 6 chars long'
          );

          done();
        });
    });
  });
});
