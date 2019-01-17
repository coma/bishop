const { readdirSync } = require('fs');
const { basename } = require('path');

const map = new Map();
const array = [];

readdirSync(__dirname).map(file => basename(file, '.js')).filter(id => id !== 'index').forEach(id => {
  const provider = require(`./${id}`)(id);
  map.set(id, provider);
  array.push(provider);
});

module.exports = { map, array };
