const express = require('express');
const http = require('http')

const port = process.env.port || 8080

const router = require('./app.js')
const app = express()
const server = http.createServer(app)
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '300mb' }));
app.use(bodyParser.urlencoded({ limit: '300mb', extended: true}));
app.use(router)

server.listen(port,()=>console.log('SERVIDOR INICIADO'))
server.setTimeout(1400000);

