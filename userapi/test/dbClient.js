require('dotenv').config();

const { expect } = require('chai');
let db;

describe('Redis', () => {
  before(() => {
    db = require('../src/dbClient');
  });

  it('should connect to Redis', (done) => {
    // Utilisez l'événement 'connect' pour vérifier la connexion réussie
    db.on('connect', () => {
      console.log('Connected to Redis in the test');
      expect(true).to.eql(true); // Vous pouvez ajuster cette assertion en fonction de vos besoins
      done();
    });
  });

  // ... Autres tests Redis ...
});
