const { api } = require('../../utils');
const { intentMessages } = require('../../utils');

module.exports = async (input) => {
  const { data } = await api.get('/countries');
  return input.responseBuilder
    .speak(intentMessages.getByCountry.speak(data.total))
    .getResponse();
};
