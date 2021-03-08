'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();

const http = require('http');

const requestHandler = require("./routes");

const server = http.createServer(requestHandler);

server.listen(3000);