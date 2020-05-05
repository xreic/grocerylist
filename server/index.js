// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Declarations
const server = express();
const router = require('../routes/router');
const port = 3000;

// Middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '../client/dist')));

server.use('/groceries', router);

server.listen(port, () => console.log(`Here: ${port}`));
