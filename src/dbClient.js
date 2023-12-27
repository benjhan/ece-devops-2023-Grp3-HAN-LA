var redis = require("redis");

const cacheHostName = process.env.AZURE_CACHE_FOR_REDIS_HOST_NAME;
const cachePassword = process.env.AZURE_CACHE_FOR_REDIS_ACCESS_KEY;

if (!cacheHostName) throw Error("AZURE_CACHE_FOR_REDIS_HOST_NAME is empty");
if (!cachePassword) throw Error("AZURE_CACHE_FOR_REDIS_ACCESS_KEY is empty");

var db = redis.createClient({
  url: `rediss://${cacheHostName}:6380`, // Utilisez `rediss://` pour TLS
  password: cachePassword,
  tls: {}, // Pour une connexion sécurisée (TLS)
  retry_strategy: () => new Error("Retry time exhausted")
});

db.connect();

process.on('SIGINT', function() {
  db.quit();
});

module.exports = db;
