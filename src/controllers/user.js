const { createClient } = require("redis");
const db = createClient({
  // Votre configuration de connexion ici
});

db.connect();

module.exports = {
  create: (user) => {
    if (!user.username) {
      return Promise.reject(new Error('Wrong user parameters'));
    }

    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    };

    return db.hGetAll(user.username).then((res) => {
      if (Object.keys(res).length === 0) {
        return db.hSet(user.username, userObj).then(() => "User created");
      } else {
        return Promise.reject(new Error('User already exists'));
      }
    });
  },

  get: (username) => {
    if (!username) {
      return Promise.reject(new Error('Username must be provided'));
    }

    return db.hGetAll(username).then((result) => {
      if (Object.keys(result).length === 0) {
        return Promise.reject(new Error("User doesn't exist"));
      } else {
        return result;
      }
    });
  },

  delete: (username) => {
    if (!username) {
      return Promise.reject(new Error('Username must be provided'));
    }

    return db.del(username).then((res) => res);
  },

  update: (username, newData) => {
    if (!username) {
      return Promise.reject(new Error('Username must be provided'));
    }

    return db.hGetAll(username).then((existingData) => {
      if (Object.keys(existingData).length === 0) {
        return Promise.reject(new Error("User doesn't exist"));
      }

      const updatedData = { ...existingData, ...newData };
      return db.hSet(username, updatedData).then(() => "User updated");
    });
  },
};
