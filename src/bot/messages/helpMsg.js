/**
 * Help Messange - Show all available commands
 */
module.exports.helpMessage = {
  color: 0x0099ff,
  title: 'Lolinha commands: ' + ':kissing_heart: ' + ':kissing_heart:',
  fields: [
    {
      name: 'Show paladins server status',
      value: '!loli server',
    },
    {
      name: 'Show player stats',
      value: '!loli player <Player Name>',
    },
    {
      name: 'Show champion stats From Player',
      value: '!loli champion <Player Name> <Champion Name>',
    },
    {
      name: 'Show 10 last matchs',
      value: '!loli history <Player Name>',
    },
    {
      name: 'Show current LIVE match',
      value: '!loli match <Player Name>',
    }
  ]
}
