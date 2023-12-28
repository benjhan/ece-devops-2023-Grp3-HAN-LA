const { expect } = require('chai');
const userController = require('../src/controllers/user');
const db = require('../src/dbClient');

describe('User', () => {
  beforeEach(() => {
    db.flushdb();
  });

  describe('Create', () => {
    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };

      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null);
        expect(result).to.be.equal('OK');
        done();
      });
    });

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };

      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });

    it('avoid creating an existing user', (done)=> {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };

      // Create a user
      userController.create(user, () => {
        // Create the same user again
        userController.create(user, (err, result) => {
          expect(err).to.not.be.equal(null);
          expect(result).to.be.equal(null);
          done();
        });
      });
    });
  });

  describe('Get', ()=> {
    it('get a user by username', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };

      // Create a user
      userController.create(user, () => {
        // Get an existing user
        userController.get(user.username, (err, result) => {
          expect(err).to.be.equal(null);
          expect(result).to.be.deep.equal({
            firstname: 'Sergei',
            lastname: 'Kudinov'
          });
          done();
        });
      });
    });

    it('can not get a user when it does not exist', (done) => {
      userController.get('invalid', (err, result) => {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });
  });

  describe('Delete', () => {
    it('delete an existing user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };

      // Create a user
      userController.create(user, () => {
        // Delete the existing user
        userController.delete(user.username, (err, result) => {
          expect(err).to.be.equal(null);
          expect(result).to.be.equal(1); // The result depends on your implementation of deletion in the database
          done();
        });
      });
    });

    it('can not delete a user that does not exist', (done) => {
      userController.delete('nonexistent', (err, result) => {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });

    it('can not delete a user with missing username', (done) => {
      userController.delete(undefined, (err, result) => {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });
  });

  describe('Update', () => {
    it('update an existing user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };

      // Create a user
      userController.create(user, () => {
        const updatedData = {
          firstname: 'UpdatedFirstName',
          lastname: 'UpdatedLastName'
        };

        // Update the existing user
        userController.update(user.username, updatedData, (err, result) => {
          expect(err).to.be.equal(null);
          expect(result).to.be.equal('OK'); // The result depends on your implementation of update in the database

          // Verify that the user has been updated
          userController.get(user.username, (getErr, getResult) => {
            expect(getErr).to.be.equal(null);
            expect(getResult).to.be.deep.equal(updatedData);
            done();
          });
        });
      });
    });

    it('can not update a user that does not exist', (done) => {
      const updatedData = {
        firstname: 'UpdatedFirstName',
        lastname: 'UpdatedLastName'
      };

      userController.update('nonexistent', updatedData, (err, result) => {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });

    it('can not update a user with missing username', (done) => {
      const updatedData = {
        firstname: 'UpdatedFirstName',
        lastname: 'UpdatedLastName'
      };

      userController.update(undefined, updatedData, (err, result) => {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });

    it('can not update a user with missing updated data', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };

      // Create a user
      userController.create(user, () => {
        userController.update(user.username, undefined, (err, result) => {
          expect(err).to.not.be.equal(null);
          expect(result).to.be.equal(null);
          done();
        });
      });
    });
  });
  
});
