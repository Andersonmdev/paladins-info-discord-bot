const { playerMessage } = require('../messages/playerMsg');
const { api } = require('../../paladins-api');

module.exports = {
  name: 'player',
  description: 'Player information',
  args: true,
  aliases: ['p'],
  async execute(message, args) {
    const id = await api.getPlayerIdByName(args[0])
      .then((response) => {
        return response[0].player_id;
      })
      .catch(() => {
        message.channel.send(`Sorry, an error occurred in the request please try later.`);
      });
    if (id) {
      const player = await api.getPlayer(id)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          const errorPrivateProfile = 'Player profile is currently set to private.';
          if (err.message === errorPrivateProfile) {
            message.channel.send(`Sorry, **${args[0]}** player profile is currently set to private!`);
          }
          else {
            message.channel.send(`Sorry, an error occurred in the request please try later.`);
          }
        });
      if (player) {
        message.channel.send({ embed: playerMessage(player) });
      }
    }
  },
};
