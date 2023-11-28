const express = require('express');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const Redis = require('ioredis');
const redis = new Redis({
  host: '127.0.0.1',
  port: 6379, // Le port par défaut de Redis
});

const db = require('./dbClient');
db.on("error", (err) => {
  console.error(err);
});

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/user', userRouter);

const server = app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening on port " + port);
});

module.exports = server;
