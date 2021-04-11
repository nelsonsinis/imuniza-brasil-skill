const Alexa = require('ask-sdk-core');
const { constants } = require('../../utils');
const { getByCountry } = require('../../services');

module.exports = {
  canHandle(input) {
    return (
      Alexa.getIntentName(input.requestEnvelope) ===
        constants.intentNames.GET_BY_COUNTRY &&
      Alexa.getRequestType(input.requestEnvelope) ===
        constants.requestTypes.INTENT_REQUEST
    );
  },
  handle: getByCountry,
};
