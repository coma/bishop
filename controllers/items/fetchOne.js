const providers = require('./providers');

async function fetchOne(req, res) {
  const result = await providers.fetchOne(req.params.id);

  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
}

module.exports = fetchOne;
