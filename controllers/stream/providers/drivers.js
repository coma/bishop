const API_ROOT = 'http://ergast.com/api/f1/drivers';

module.exports = id => ({
  listJSONPath: 'MRData.DriverTable.Drivers.*',
  listURL: `${API_ROOT}.json`,
  mapListItem: o => ({
    id: `${id}-${o.driverId}`,
    name: `${o.givenName} ${o.familyName}`,
  }),
});
