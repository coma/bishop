const request = require('request');
const JSONStream = require('JSONStream');
const through = require('through2');
const multistream = require('multistream');
const providers = require('./providers');

function getStream({ listURL, listJSONPath, mapListItem }) {
  return request({ url: listURL })
  .pipe(JSONStream.parse(listJSONPath))
  .pipe(through.obj((item, encoding, next) => {
    next(null, JSON.stringify(mapListItem(item)));
  }));
}

function fetchList(req, res) {
  const stream = multistream(providers.array.map(getStream));
  res.setHeader('content-type', 'application/json');
  stream.on('end', () => res.end());
  stream.pipe(res);
}

module.exports = fetchList;
