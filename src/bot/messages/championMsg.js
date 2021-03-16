const championMessage = (data) => {
	return {
		color: 0x0099ff,
		title: `${data.champion} (level: ${data.Rank})`,
		fields: [
			{
				name: `**Champion Stats:**`,
				value:
							'Kills: ' + data.Kills + ' - Deaths: ' + data.Deaths + ' - Assistis: ' + data.Assists +
							'\nTotal Wins: ' + data.Wins + ' - Total Losses: ' + data.Losses +
							'\nMinutes played: ' + data.Minutes + ' - Last time played: ' + data.LastPlayed,
			},
		],
	};
};

module.exports = {
	championMessage,
};
