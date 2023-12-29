const db = require("../dbClient");

module.exports = {
  create: (user, callback) => {
    if (!user.username) {
      return callback(new Error("Wrong user parameters"), null);
    }

    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    };

    db.hgetall(user.username, (err, res) => {
      if (err) return callback(err, null);

      if (!res) {
        db.hmset(user.username, userObj, (err, result) => {
          if (err) return callback(err, null);
          callback(null, result);
        });
      } else {
        callback(new Error("User already exists"), null);
      }
    });
  },

  get: (username, callback) => {
    if (!username) {
      return callback(new Error("Username must be provided"), null);
    }

    db.hgetall(username, (err, result) => {
      if (err) return callback(err, null);

      if (result) {
        callback(null, result);
      } else {
        callback(new Error("User doesn't exist"), null);
      }
    });
  },

  delete: (username, callback) => {
    db.hgetall(username, (err, existingData) => {
      if (err) {
        return callback(err, null);
      }

      if (!existingData) {
        return callback(new Error("User doesn't exist"), null);
      }

      db.del(username, (err, res) => {
        if (err) {
          return callback(err, null);
        }

        callback(null, res);
      });
    });
  },

  update: (username, newData, callback) => {
    if (!username) {
      return callback(new Error("Username must be provided"), null);
    }
  
    if (!newData) {
      return callback(new Error("Updated data must be provided"), null);
    }
  
    db.hgetall(username, (err, existingData) => {
      if (err) return callback(err, null);
  
      if (!existingData) {
        return callback(new Error("User doesn't exist"), null);
      }
  
      // Mettre à jour les champs spécifiés dans newData
      const updatedData = { ...existingData, ...newData };
  
      // Mettre à jour l'entrée dans la base de données
      db.hmset(username, updatedData, (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
      });
    });
  },
  
};
