'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');

const port1 = Number(3500);
const port2 = Number(3600);

var options = {
  key: fs.readFileSync('./private.key'),
  cert: fs.readFileSync('./certificate.pem')
};
const routes = require('./routes');

const app = express();
http.createServer(app).listen(port1);
https.createServer(options, app).listen(port2);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static('ui-dist'));
app.use('/routes', routes);

app.get('/', function(req, res){ res.sendfile(__dirname + '/index.html', [], null); });
