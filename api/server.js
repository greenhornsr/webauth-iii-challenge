const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('../auth/auth-router');
const usersRouter = require('../resources/users-routes');

const server = express();

server.use(cors(), helmet(), express.json());
server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
    res.send(`I am going to use some TOKENS!`);
})

function logger(req, res, next) {
    console.log(`${req.method} request sent to ${req.originalUrl} at [${new Date().toISOString}]`)
}

module.exports = server;