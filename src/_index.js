const Discord = require('discord.js');
const fs = require('fs');

const prefix = process.env.PREFIX;
const client = new Discord.Client();

client.commands = new Discord.Collection();
fs.readdirSync('./src/bot/commands')
	.filter(file => file.endsWith('.js'))
	.forEach(file => {
		const command = require(`./bot/commands/${file}`);
		client.commands.set(command.name, command);
	});

client.once('ready', () => {
	/* eslint-disable-next-line no-console */
	console.log('Start bot in:');
	client.guilds.cache.forEach(server => {
		/* eslint-disable-next-line no-console */
		console.log(`${server.name} id: ${server.id}`);
	});
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		if (command.usage) {
			reply += `\nThe command would be: ${prefix} ${command.name} ${command.usage}`;
		}
		return message.channel.send(reply);
	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		/* eslint-disable-next-line no-console */
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});

client.login(process.env.TOKEN);
