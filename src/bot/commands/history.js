const { historyMessage } = require('../messages/historyMsg');
const { api } = require('../../paladins-api');

module.exports = {
  name: 'history',
  description: `The player's ten most recent matches`,
  args: true,
  aliases: ['h'],
  async execute(message, args) {
    const id = await api.getPlayerIdByName(args[0])
      .then((response) => {
        return response[0].player_id;
      })
      .catch(() => {
        message.channel.send(`Sorry, an error occurred in the request please try later.`);
      });
    if (id) {
      const matchs = await api.getPlayerMatchHistory(id)
        .then((response) => {
          return response;
        })
        .catch(() => {
          message.channel.send(`Sorry, an error occurred in the request please try later.`);
        });
      if (matchs && !matchs[0].ret_msg) {
        const firtsMatchs = [];
        matchs.slice([0], [matchs.length > 10 ? 10 : matchs.length]).map((item) => {
          firtsMatchs.push(item);
        });
        message.channel.send({ embed: historyMessage(firtsMatchs) });
      }
      else {
        message.channel.send(`Sorry, there are no recent matches for this player.`);
      }
    }
  },
};
