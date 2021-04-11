const { intentMessages } = require('../../utils');

module.exports = (handlerInput, error) => {
  console.log(`~~~~ Error handled: ${error.stack}`);
  return handlerInput.responseBuilder
    .speak(intentMessages.defaultError.speak)
    .reprompt(intentMessages.defaultError.reprompt)
    .getResponse();
};
