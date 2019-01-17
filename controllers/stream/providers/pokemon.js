const API_ROOT = 'https://pokeapi.co/api/v2/pokemon';

module.exports = id => ({
  listJSONPath: 'results.*',
  listURL: API_ROOT,
  mapListItem: o => ({
    id: `${id}-${o.url.split('/').slice(-2).shift()}`,
    name: o.name,
  }),
});
