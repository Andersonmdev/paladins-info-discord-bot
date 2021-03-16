const historyMessage = (data) => {
	const matchs = [];
	data.map((item, i) => {
		const value = {
			name: `${i + 1}) ${item.Map_Game} (ID: ${item.Match}) - ` +
            `Status: **${item.Win_Status === 'Win' ? 'Win' : 'Loss'}**`,
			value:
            `Champion: **${item.Champion}** | Gold: ${item.Gold} | Duration: ${item.Minutes}` +
            `\nKills: ${item.Kills} | Deaths: ${item.Deaths} | Assists: ${item.Assists} ` +
            `| Max Multi Kill: ${item.Multi_kill_Max}` +
            `\nDamage: ${item.Damage_Taken_Physical} | Healing Self: ${item.Healing_Player_Self} ` +
            `| Healing: ${item.Healing}`,
		};
		matchs.push(value);
	});

	return {
		color: 0x0099ff,
		title: 'Matchs History:',
		fields: matchs,
	};
};

module.exports = {
	historyMessage,
};
