const { Router } = require('express');
const fetchList = require('./fetchList');
const fetchOne = require('./fetchOne');

module.exports = new Router()
  .get('/', fetchList)
  .get('/:id', fetchOne);
