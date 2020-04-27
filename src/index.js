const Discord = require('discord.js');
const fs = require('fs');

/**
 * Bot configuration with prefix for commands and token for connection
 * It is recommended to create a configuration file containing the token and other bot configs
 */
const { prefix, token} = require('./bot/config/config.json');

/**
 * Create a new Discord Client
 * And use Discord Collection for create new commands
 */
const client = new Discord.Client();
client.commands = new Discord.Collection();

/**
 * Get all JS files that implement the commands
 */
fs.readdirSync('./src/bot/commands')
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
  /**
   * Set a new item in the Collection
   * With the key as the command name and the value as the exported module
   */
  const command = require(`./bot/commands/${file}`);
	client.commands.set(command.name, command);
  });

/**
 * Start the Bot
 * And wait for new messages in the server chat
 */
client.on('ready', () => {
  // START API
  console.log(`Start bot with ${client.guilds.size} servers.`);
});

client.on('message', async message => { 
  /**
   * Check if the message is from bot or not started with prefix then return
   * Remove prefix and create new array with arguments - (/ +/) ignore spaces in the message
   * First argument is the bot command
   * Check if command exist and has arguments to finnaly try execute it
   */
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/); 
  const commandName = args.shift().toLowerCase(); 
  console.log(args+commandName);

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);
  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;
    if (command.usage) {
      reply += `\nThe command would be: ${prefix} ${command.name} ${command.usage}`;
    }
    return message.channel.send(reply);
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
	  message.reply('There was an error trying to execute that command!');
  }
});

client.login(token); 
