module.exports = (app) => {
  const config = require('../config');
  const baseUrl = config.baseUrl;
  const serialsMock = require('./serialsMock');

  app.route(baseUrl).get((req, res) => res.json(serialsMock.serials));
};
