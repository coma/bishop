const API_ROOT = 'http://www.clashapi.xyz/api/cards';

module.exports = id => ({
  listJSONPath: '*',
  listURL: API_ROOT,
  mapListItem: o => ({
    id: `${id}-${o._id}`,
    name: o.name,
  }),
});
