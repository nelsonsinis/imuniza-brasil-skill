const Alexa = require('ask-sdk-core');
const { constants } = require('../../utils');
const { getCityByState } = require('../../services');

module.exports = {
  canHandle(input) {
    return (
      Alexa.getIntentName(input.requestEnvelope) ===
        constants.intentNames.GET_CITY_BY_STATE &&
      Alexa.getRequestType(input.requestEnvelope) ===
        constants.requestTypes.INTENT_REQUEST
    );
  },
  handle: getCityByState,
};
