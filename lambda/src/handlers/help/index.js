const Alexa = require('ask-sdk-core');
const { constants } = require('../../utils');
const { help } = require('../../services');

module.exports = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) ===
        constants.requestTypes.INTENT_REQUEST &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        constants.intentNames.HELP
    );
  },
  handle: help,
};
