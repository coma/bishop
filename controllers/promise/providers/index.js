const { readdirSync } = require('fs');
const { basename } = require('path');

const providerIds = readdirSync(__dirname)
  .map(file => basename(file, '.js'))
  .filter(id => id !== 'index');

const providersMap = new Map();
const providersArray = [];
providerIds.forEach(id => {
  const provider = require(`./${id}`);
  providersMap.set(id, provider);
  providersArray.push(provider);
});

function fetchList() {
  return Promise
    .all(providersArray.map(provider => provider.fetchList()))
    .then(results => [].concat(...results));
}

function parseId(rawId) {
  const [provider, ...rest] = rawId.split('-');
  const id = rest.join('-');

  return !id || !providerIds.includes(provider)
    ? null
    : { provider, id };
}

function fetchOne(rawId) {
  const parsed = parseId(rawId);

  if (!parsed) {
    return null;
  }

  const { id, provider } = parsed;

  return providersMap.get(provider).fetchOne(id);
}

module.exports = { fetchList, fetchOne };
