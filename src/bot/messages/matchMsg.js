const { ranks } = require('../../utils/convertRank');

const matchMessage = (data) => {
	return {
		color: 0x0099ff,
		title: `${data[0]}`,
		fields: [
			{
				name: `**First team**`,
				value:
							'Player 1: ' + `${data[1].name ? data[1].name : 'PRIVATE'} (${data[1].level}) ` +
							'| ' + data[1].champion + ` (${data[1].championLevel}) ` +
							'| ' + ranks[data[1].rank] + ' (' + data[1].rankWins + ' / ' + data[1].rankLosses + ')' +
							'\nPlayer 2: ' + `${data[2].name ? data[2].name : 'PRIVATE'} (${data[2].level}) ` +
							'| ' + data[2].champion + ` (${data[2].championLevel}) ` +
							'| ' + ranks[data[2].rank] + ' (' + data[2].rankWins + ' / ' + data[2].rankLosses + ')' +
							'\nPlayer 3: ' + `${data[3].name ? data[3].name : 'PRIVATE'} (${data[3].level}) ` +
							'| ' + data[3].champion + ` (${data[3].championLevel}) ` +
							'| ' + ranks[data[3].rank] + ' (' + data[3].rankWins + ' / ' + data[3].rankLosses + ')' +
							'\nPlayer 4: ' + `${data[4].name ? data[4].name : 'PRIVATE'} (${data[4].level}) ` +
							'| ' + data[4].champion + ` (${data[4].championLevel}) ` +
							'| ' + ranks[data[4].rank] + ' (' + data[4].rankWins + ' / ' + data[4].rankLosses + ')' +
							'\nPlayer 5: ' + `${data[5].name ? data[5].name : 'PRIVATE'} (${data[5].level}) ` +
							'| ' + data[5].champion + ` (${data[5].championLevel}) ` +
							'| ' + ranks[data[5].rank] + ' (' + data[5].rankWins + ' / ' + data[5].rankLosses + ')',
			},
			{
				name: `**Second team**`,
				value:
							'Player 1: ' + `${data[6].name ? data[6].name : 'PRIVATE'} (${data[6].level}) ` +
							'| ' + data[6].champion + ` (${data[6].championLevel}) ` +
							'| ' + ranks[data[6].rank] + ' (' + data[6].rankWins + ' / ' + data[6].rankLosses + ')' +
							'\nPlayer 2: ' + `${data[7].name ? data[7].name : 'PRIVATE'} (${data[7].level}) ` +
							'| ' + data[7].champion + ` (${data[7].championLevel}) ` +
							'| ' + ranks[data[7].rank] + ' (' + data[7].rankWins + ' / ' + data[7].rankLosses + ')' +
							'\nPlayer 3: ' + `${data[8].name ? data[8].name : 'PRIVATE'} (${data[8].level}) ` +
							'| ' + data[8].champion + ` (${data[8].championLevel}) ` +
							'| ' + ranks[data[8].rank] + ' (' + data[8].rankWins + ' / ' + data[8].rankLosses + ')' +
							'\nPlayer 4: ' + `${data[9].name ? data[9].name : 'PRIVATE'} (${data[9].level}) ` +
							'| ' + data[9].champion + ` (${data[9].championLevel}) ` +
							'| ' + ranks[data[9].rank] + ' (' + data[9].rankWins + ' / ' + data[9].rankLosses + ')' +
							'\nPlayer 5: ' + `${data[10].name ? data[10].name : 'PRIVATE'} (${data[10].level}) ` +
							'| ' + data[10].champion + ` (${data[10].championLevel}) ` +
							'| ' + ranks[data[10].rank] + ' (' + data[10].rankWins + ' / ' + data[10].rankLosses + ')',
			},
		],
	};
};

module.exports = {
	matchMessage,
};
