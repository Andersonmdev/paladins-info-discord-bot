const { helpMessage } = require('../messages/helpMsg');

module.exports = {
  name: 'help',
  description: 'List all commands and their information',
  args: false,
  execute(message) {
    message.channel.send({ embed: helpMessage });
  },
};
