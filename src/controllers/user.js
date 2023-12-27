const { createClient } = require("redis");
const db = createClient({
  // Votre configuration de connexion ici
});

db.connect();

module.exports = {
  create: async (user) => {
    if (!user.username) {
      throw new Error('Wrong user parameters');
    }

    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    };

    try {
      const res = await db.hGetAll(user.username);
      if (Object.keys(res).length === 0) {
        await db.hSet(user.username, userObj);
        return "User created";
      } else {
        throw new Error('User already exists');
      }
    } catch (err) {
      throw err;
    }
  },

  get: async (username) => {
    if (!username) {
      throw new Error('Username must be provided');
    }

    try {
      const result = await db.hGetAll(username);
      if (Object.keys(result).length === 0) {
        throw new Error("User doesn't exist");
      } else {
        return result;
      }
    } catch (err) {
      throw err;
    }
  },

  delete: async (username) => {
    if (!username) {
      throw new Error('Username must be provided');
    }

    try {
      const res = await db.del(username);
      return res;
    } catch (err) {
      throw err;
    }
  },

  update: async (username, newData) => {
    if (!username) {
      throw new Error('Username must be provided');
    }

    try {
      const existingData = await db.hGetAll(username);
      if (Object.keys(existingData).length === 0) {
        throw new Error("User doesn't exist");
      }

      const updatedData = { ...existingData, ...newData };
      await db.hSet(username, updatedData);
      return "User updated";
    } catch (err) {
      throw err;
    }
  },
};
