const Alexa = require('ask-sdk-core');
const { intentMessages, api } = require('../../utils');
const path = require('path');

const states = require(path.resolve(__dirname, '../../../assets/states.json'));

module.exports = async (input) => {
  const slotValue = Alexa.getSlotValue(input.requestEnvelope, 'state');

  const state = states.find((item) => item.name.toLowerCase() === slotValue);

  const { data } = await api.get('/states', {
    params: {
      state: state.uuid,
    },
  });

  return input.responseBuilder
    .speak(intentMessages.getByState.speak(data.quantityPatients, state.name))
    .getResponse();
};
