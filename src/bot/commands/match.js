const { matchMessage } = require('../messages/matchMsg');
const { api } = require('../../paladins-api');

module.exports = {
  name: 'match',
  description: 'Current player match information',
  args: true,
  aliases: ['m'],
  async execute(message, args) {
    const id = await api.getPlayerIdByName(args[0])
      .then((response) => {
        return response[0].player_id;
      })
      .catch(() => {
        message.channel.send(`Sorry, an error occurred in the request please try later.`);
      });
    if (id) {
      const playerDetails = await api.getPlayerStatus(id)
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
      if (playerDetails.status === 3 && playerDetails.Match) {
        const dataForMsg = [];
        const matchInfo = await api.getActiveMatchDetails(playerDetails.Match)
          .then((response) => {
            return response;
          })
          .catch(() => {
            message.channel.send(`Sorry, an error occurred in the request please try later.`);
          });
        dataForMsg.push(matchInfo[0].mapGame);
        matchInfo.forEach(player => {
          const data = {
            name: player.playerName,
            level: player.Account_Level,
            champion: player.ChampionName,
            championLevel: player.Mastery_Level,
            rank: player.Tier,
            rankWins: player.tierWins,
            rankLosses: player.tierLosses,
          };
          dataForMsg.push(data);
        });
        message.channel.send({ embed: matchMessage(dataForMsg) });
      }
      else {
        message.channel.send(`Sorry, the player is not in a match.`);
      }
    }
  },
};
