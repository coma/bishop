const providers = require('./providers');

async function fetchList(req, res) {
  res.json(await providers.fetchList());
}

module.exports = fetchList;
