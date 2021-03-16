const { championMessage } = require('../messages/championMsg');
const { api } = require('../../paladins-api');

module.exports = {
	name: 'champion',
	description: 'Champion information',
	args: true,
	aliases: ['c'],
	async execute(message, args) {
		if (args.length > 1) {
			const id = await api.getPlayerIdByName(args[0])
				.then((response) => {
					return response[0].player_id;
				})
				.catch(() => {
					message.channel.send(`Sorry, an error occurred in the request please try later.`);
				});
			if (id) {
				const champions = await api.getPlayerChampionRanks(id)
					.then((response) => {
						return response;
					})
					.catch(() => {
						message.channel.send(`Sorry, an error occurred in the request please try later.`);
					});
				if (champions.length !== 0) {
					const findChampion = champions.find(c => c.champion.toLowerCase() === args[1].toLowerCase());
					if (findChampion) {
						message.channel.send({ embed: championMessage(findChampion) });
					}
					else {
						message.channel.send(`Sorry, champion **${args[1]}** not found!`);
					}
				}
				else {
					message.channel.send(`Sorry, **${args[0]}** player profile is currently set to private!`);
				}
			}
		}
		else {
			message.channel.send(`You didn't provide champion name`);
		}
	},
};
