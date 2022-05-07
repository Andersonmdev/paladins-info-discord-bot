const moment = require('moment');

const utcDate = new Date().toUTCString();
const localDate = moment(utcDate).utcOffset('-0300');

module.exports.helpMessage = {
	color: 0x0099ff,
	title: `Lolinha commands: :kissing_heart: :kissing_heart:`,
	url: 'https://github.com/Andersonmdev/Paladins-Bot-Discord-Lolinha',
	fields: [
		{
			name: 'Show player stats',
			value: ';player <Player Name> \nAliases: p',
		},
		{
			name: 'Show champion stats From Player',
			value: ';champion <Player Name> <Champion Name> \nAliases: c',
		},
		{
			name: 'Show 10 last matchs',
			value: ';history <Player Name> \nAliases: h',
		},
		{
			name: 'Show current LIVE match',
			value: ';match <Player Name> \nAliases: m',
		},
	],
	timestamp: localDate,
	footer: {
		text: 'Feedback in github page: github.com/Andersonmdev/Paladins-Bot-Discord-Lolinha',
	},
};
