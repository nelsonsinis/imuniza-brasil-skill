const path = require('path');
const Alexa = require('ask-sdk-core');
const { api, intentMessages } = require('../../utils');

const states = require(path.resolve(__dirname, '../../../assets/states.json'));

module.exports = async (input) => {
  const sessionAttributes = input.attributesManager.getSessionAttributes();

  if (!sessionAttributes.city) {
    throw 'city-not-found';
  }

  const slotValue = Alexa.getSlotValue(input.requestEnvelope, 'state');

  const savedState = states.find(
    (item) => item.name.toLowerCase() === slotValue,
  );
  const savedCity = savedState.cities.find(
    (item) => item.name.toLowerCase() === sessionAttributes.city,
  );

  const { data } = await api.get('/cities', {
    params: {
      city: savedCity.name,
      state: savedState.uuid,
    },
  });

  return input.responseBuilder
    .speak(
      intentMessages.getByCity.responseSpeak(
        data.quantityPatients,
        sessionAttributes.city,
      ),
    )
    .getResponse();
};
