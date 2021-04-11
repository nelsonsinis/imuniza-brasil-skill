const { intentMessages } = require('../../utils');

module.exports = (handlerInput) => {
  return handlerInput.responseBuilder
    .speak(intentMessages.help.speak)
    .reprompt(intentMessages.help.reprompt)
    .getResponse();
};
