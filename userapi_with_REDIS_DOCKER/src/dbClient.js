var redis = require("redis");
const configure = require('./configure')

const config = configure();
var db = redis.createClient({
  host: 'redis',
  port: 6380,
  retry_strategy: (options) => {
    if (options.error && options.error.code === 'CONNECTION_BROKEN') {
      // La connexion est cassée, réessayez dans 5 secondes
      return 5000;
    }
    // Retourne une erreur pour abandonner la reconnexion
    return new Error('Retry time exhausted');
  },
});

process.on('SIGINT', function() {
  db.quit();
});

module.exports = db;
