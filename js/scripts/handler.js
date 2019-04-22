"use strict";

const utility = require('./scripts/utility.js');

module.exports = {
  ready: () => {
    utility.status('login');
  },
  message: (msg) => {
    if (msg.content === 'ping') {
      msg.reply( 'pong!' );
    }
  }
}
