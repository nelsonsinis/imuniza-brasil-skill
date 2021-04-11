const Alexa = require('ask-sdk-core');
const { intentMessages, api } = require('../../utils');
const path = require('path');

const states = require(path.resolve(__dirname, '../../../assets/states.json'));

module.exports = async (input) => {
  const slotValue = Alexa.getSlotValue(input.requestEnvelope, 'city');

  const savedStates = states.filter((item) =>
    item.cities.some((city) => city.name.toLowerCase() === slotValue),
  );

  if (savedStates.length > 1) {
    const session = input.attributesManager.getSessionAttributes();
    session.city = slotValue;
    input.attributesManager.setSessionAttributes(session);

    return input.responseBuilder
      .speak(intentMessages.getByCity.moreThanOneStateSpeak(savedStates.length))
      .reprompt(intentMessages.getByCity.moreThanOneStateReprompt)
      .getResponse();
  }

  const city = savedStates[0].cities.find(
    (item) => item.name.toLowerCase() === slotValue,
  );

  const { data } = await api.get('/cities', {
    params: {
      city: city.name,
    },
  });

  return input.responseBuilder
    .speak(
      intentMessages.getByCity.responseSpeak(data.quantityPatients, city.name),
    )
    .getResponse();
};
