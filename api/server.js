// build your server here
const express = require('express')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express();
server.use(express.json());

server.use('/projects', projectRouter)
server.use('/tasks', taskRouter)
server.use('/resources', resourceRouter)

module.exports = server;