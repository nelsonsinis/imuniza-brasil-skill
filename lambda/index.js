// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const {
  launch,
  help,
  cancelOrStop,
  error,
  getByCountry,
  getByState,
  getCityByState,
  getByCity,
} = require('./src/handlers');

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    launch,
    help,
    cancelOrStop,
    getByCountry,
    getByState,
    getCityByState,
    getByCity,
  )
  .addErrorHandlers(error)
  .lambda();
