const axios = require('axios');

const id = 'clash';
const url = 'http://www.clashapi.xyz/api/cards';

function onFetchListSuccess(response) {
  return response.data.map(item => ({
    id: `${id}-${item._id}`,
    name: item.name,
  }));
}

function onFetchListFailure() {
  return [];
}

function fetchList() {
  return axios
    .get(url)
    .then(onFetchListSuccess)
    .catch(onFetchListFailure);
}

function fetchOne(id) {
  return axios
    .get(`${url}/${id}`)
    .then(response => response.data);
}

module.exports = { fetchList, fetchOne };
