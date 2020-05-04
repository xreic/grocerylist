// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Declarations
const server = express();
const port = 3000;

// Middleware
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '../client/dist')));

server.listen(port, () => console.log(`Here: ${port}`));
