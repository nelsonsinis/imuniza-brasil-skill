const axios = require('axios');

const instance = axios.default.create({
  baseURL: 'http://100.25.13.31',
});

module.exports = instance;
