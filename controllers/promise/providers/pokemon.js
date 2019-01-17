const axios = require('axios');

const id = 'pokemon';
const url = 'https://pokeapi.co/api/v2/pokemon';

function onFetchListSuccess(response) {
  return response.data.results.map(item => ({
    id: `${id}-${item.url.split('/').slice(-2).shift()}`,
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
