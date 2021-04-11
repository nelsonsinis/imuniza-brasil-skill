const Alexa = require('ask-sdk-core');
const { launch } = require('../../services');
const { constants } = require('../../utils');

module.exports = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) ===
      constants.requestTypes.LAUNCH_REQUEST
    );
  },
  handle: launch,
};
