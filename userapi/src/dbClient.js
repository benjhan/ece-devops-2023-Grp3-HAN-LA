const redis = require("redis");
require('dotenv').config();

const cacheHostName = process.env.AZURE_CACHE_FOR_REDIS_HOST_NAME;
const cachePassword = process.env.AZURE_CACHE_FOR_REDIS_ACCESS_KEY;

if (!cacheHostName) throw Error("AZURE_CACHE_FOR_REDIS_HOST_NAME is empty");
if (!cachePassword) throw Error("AZURE_CACHE_FOR_REDIS_ACCESS_KEY is empty");

const db = redis.createClient({
  host: 'localhost', // L'hôte du conteneur Docker Redis
  port: 6379,         // Le port par défaut de Redis
  password: cachePassword,
});

// Écoutez l'événement 'connect' pour vérifier la connexion réussie.
db.on('connect', () => {
  console.log('Connected to Redis');
});

// Gestion des erreurs
db.on('error', (err) => {
  console.error('Redis connection error:', err);
});

process.on('SIGINT', function() {
  db.quit();
});

module.exports = db;
