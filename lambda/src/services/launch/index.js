const { intentMessages } = require('../../utils');

module.exports = (handlerInput) => {
  return handlerInput.responseBuilder
    .speak(intentMessages.launchRequest.speak)
    .reprompt(intentMessages.launchRequest.reprompt)
    .getResponse();
};
