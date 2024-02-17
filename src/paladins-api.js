const paladinsJs = require('paladins.js');
// const dotenv = require('dotenv');
// dotenv.config();

const api = new paladinsJs.API({
  devId: process.env.DEVID,
  authKey: process.env.AUTHKEY,
});

module.exports = {
  api,
};
