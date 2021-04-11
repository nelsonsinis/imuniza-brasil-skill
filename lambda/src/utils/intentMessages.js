module.exports = {
  launchRequest: {
    speak:
      'Olá! Estou aqui para te informar os dados da campanha de vacinação do Covid 19 no Brasil. Você pode perguntar, por exemplo, quantas pessoas já foram vacinadas e eu irei buscar esse dado para você, vamos lá?',
    reprompt:
      'Ops! Acho que você esqueceu de fazer alguma pergunta, tente perguntar algo.',
  },
  defaultError: {
    speak: 'Hmmmm... não compreendi! Por favor, tente novamente!',
    reprompt: 'Hmmmm... não compreendi! Por favor, tente novamente!',
  },
  getByCountry: {
    speak: (count) =>
      `Até hoje ${count} pessoas já foram vacinadas! <break time="250ms" /> Mesmo assim, vamos continuar ficando em casa e nos cuidando! `,
  },
  getByCity: {
    responseSpeak: (count, city) =>
      `Até hoje ${
        count === 0
          ? 'nenhuma pessoa já foi vacinada'
          : `${count} pessoas já foram vacinadas`
      } em ${city}!`,
    moreThanOneStateSpeak: (quantity) =>
      `Hmmm... Percebi que em ${quantity} estados existem cidades com esse mesmo nome, de qual estado você deseja?`,
    moreThanOneStateReprompt: 'Me diga, qual estado você deseja?',
  },
  getByState: {
    speak: (count, state) =>
      `Atualmente ${
        count === 0
          ? 'nenhuma pessoa já foi vacinada'
          : `${count} pessoas já foram vacinadas`
      } em ${state}!`,
  },
  help: {
    speak: 'Você pode perguntar algo para mim, como posso te ajudar?',
    reprompt: 'Você pode perguntar algo para mim, como posso te ajudar?',
  },
  cancelOrStop: {
    speak: 'Adeus!',
  },
};
