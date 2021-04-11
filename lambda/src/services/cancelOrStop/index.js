const { intentMessages } = require('../../utils');

module.exports = (handlerInput) => {
  return handlerInput.responseBuilder
    .speak(intentMessages.cancelOrStop.speak)
    .getResponse();
};
