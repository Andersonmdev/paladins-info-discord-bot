const { ranks } = require('../../utils/convertRank');

const playerMessage = (data) => {
	return {
		color: 0x0099ff,
		title: `${data.Name} ${data.Title ? ', ' + data.Title : ''} (level: ${data.Level})`,
		thumbnail: {
			url: data.AvatarURL,
		},
		fields: [
			{
				name: `**General Stats:**`,
				value:
							'Total Achievements: ' + data.Total_Achievements + ' - Total XP: ' + data.Total_XP +
							'\nTotal Wins: ' + data.Wins + ' - Total Losses: ' + data.Losses +
							'\nCretion Date: ' + data.Created_Datetime + ` (Hours: ${data.HoursPlayed})`,
			},
			{
				name: `**Ranked Stats for Season ${data.RankedKBM.Season}:**`,
				value:
							'Rank: ' + ranks[data.RankedKBM.Tier] + ` (TP: ${data.RankedKBM.Points})` +
              '\nWins: ' + data.RankedKBM.Wins + ' - Losses: ' + data.RankedKBM.Losses,
			},
		],
	};
};

module.exports = {
	playerMessage,
};
