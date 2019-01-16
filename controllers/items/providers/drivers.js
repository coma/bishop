const axios = require('axios');

const id = 'drivers';
const url = 'http://ergast.com/api/f1/drivers';

function onFetchListSuccess(response) {
  return response.data.MRData.DriverTable.Drivers.map(item => ({
    id: `${id}-${item.driverId}`,
    name: `${item.givenName} ${item.familyName}`,
  }));
}

function onFetchListFailure() {
  return [];
}

function fetchList() {
  return axios
    .get(`${url}.json`)
    .then(onFetchListSuccess)
    .catch(onFetchListFailure);
}

function fetchOne(id) {
  return axios
    .get(`${url}/${id}.json`)
    .then(response => response.data);
}

module.exports = { fetchList, fetchOne };
