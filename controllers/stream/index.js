const { Router } = require('express');
const fetchList = require('./fetchList');

module.exports = new Router()
  .get('/', fetchList);
