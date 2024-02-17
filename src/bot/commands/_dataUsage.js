const { api } = require('../../paladins-api');

module.exports = {
  name: '_data',
  description: 'DEV COMMAND FOR DATA USAGE API PALADINS',
  args: false,
  async execute(message) {
    api.getDataUsage()
      .then((response) => {
        /* eslint-disable-next-line no-console */
        console.log(response);
        message.channel.send('OK');
      })
      .catch((err) => {
        message.channel.send(`ERROR: ${err}`);
      });
  },
};
