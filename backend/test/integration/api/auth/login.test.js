const request = require('supertest');
const { expect } = require('chai');

const app = require('../../../../src/app');
const { User } = require('../../../../src/models');
const {
  UNPROCESSABLE_ENTITY,
} = require('../../../../src/utils/response-messages');

describe('ROUTE: LOGIN', () => {
  describe('POST /api/v1/login', () => {
    describe('Error Validation Data Login', () => {
      it('should return status 422 when `login` field & `password` field empty or undefined', async () => {
        // Arrange
        //

        // Act
        const response = await request(app)
          .post('/api/v1/login')
          .set('Accept', 'application/json')
          .send({
            login: undefined,
            password: undefined,
          })
          .then((res) => res);

        // Assert
        expect(response.status).to.eq(422);
        expect(response.body.status).to.eq('error');
        expect(response.body.message).to.be.equal(
          UNPROCESSABLE_ENTITY
        );
        expect(response.body.results[0].login).to.be.equal(
          'Login is required'
        );
        expect(response.body.results[2].password).to.be.equal(
          'Password is required'
        );
      });

      it('should return status 422 when `password` least than 6', async () => {
        // Arrange
        User.destroy({ truncate: true, cascade: false });

        // Act
        const response = await request(app)
          .post('/api/v1/login')
          .set('Accept', 'application/json')
          .send({
            login: 'test@test.com',
            password: '12345',
          })
          .then((res) => res);

        // Assert
        expect(response.status).to.eq(422);
        expect(response.body.status).to.eq('error');
        expect(response.body.message).to.be.equal(
          UNPROCESSABLE_ENTITY
        );
        expect(response.body.results[1].password).to.be.equal(
          'Must be at least 6 chars long'
        );
      });

      it('should return status 422 when `login` value do not match database records', async () => {
        // Arrange
        User.destroy({ truncate: true, cascade: false });

        // Act
        const response = await request(app)
          .post('/api/v1/login')
          .set('Accept', 'application/json')
          .send({
            login: 'test@test.coma',
            password: '123456',
          })
          .then((res) => res);

        // Assert
        expect(response.status).to.eq(422);
        expect(response.body.status).to.eq('error');
        expect(response.body.message).to.be.equal(
          UNPROCESSABLE_ENTITY
        );
        expect(response.body.results[0].login).to.be.equal(
          'These credentials do not match our records.'
        );
      });
    });

    describe('Account User Not Verified', () => {
      it('should return status 401 when user account have not been verified', async () => {
        // Arrange
        User.destroy({ truncate: true, cascade: false });
        const user = await User.create({
          name: 'test_no_verify',
          username: 'test_no_verify',
          email: 'test_no_verify@test.com',
          password: 'password',
        });

        // Act
        const response = await request(app)
          .post('/api/v1/login')
          .set('Accept', 'application/json')
          .send({
            login: user.email,
            password: 'password',
          })
          .then((res) => res);

        // Assert
        expect(response.status).to.eq(401);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.all.keys(
          'status',
          'message',
          'results'
        );
        expect(response.body.status).to.eq('error');
        expect(response.body.message).to.eq(
          'These credentials have not been verified'
        );
        expect(response.body.results).to.be.null;
      });
    });

    describe('Success Login', () => {
      it('should return status 200 with json token when user account exist and have been verified', async () => {
        // Arrange
        User.destroy({ truncate: true, cascade: false });
        const user = await User.create({
          name: 'test',
          username: 'test',
          email: 'test@test.com',
          password: 'password',
          verifyAt: new Date(),
        });

        // Act
        const response = await request(app)
          .post('/api/v1/login')
          .set('Accept', 'application/json')
          .send({
            login: user.email,
            password: 'password',
          })
          .then((res) => res);

        // Assert
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.all.keys(
          'status',
          'message',
          'results'
        );
        expect(response.body.status).to.eq('success');
        expect(response.body.message).to.eq(
          'User login successfully'
        );
        expect(response.body.results.token).to.be.ok;
      });
    });
  });
});
