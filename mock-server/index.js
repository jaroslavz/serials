const express = require('express'),
  app = express(),
  port = 8080
  bodyParser = require('body-parser'),
  cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/* register routes for mock server */
const routes = [
  // serials
  require('./api/serials/serialsRoute')
];
routes.forEach(route => route(app));

app.listen(port);

console.log('API server started on: ' + port);
