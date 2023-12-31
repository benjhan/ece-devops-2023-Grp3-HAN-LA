var redis = require("redis");

var db = redis.createClient({
  host: process.env.REDIS_HOST || "mon-redis",
  port: process.env.REDIS_PORT || 6379,
  retry_strategy: () => {
    return new Error("Retry time exhausted");
  }
});

db.on('error', (err) => {
  console.error('Redis connection error:', err);
});

process.on('SIGINT', function() {
  db.quit();
});

module.exports = db;
