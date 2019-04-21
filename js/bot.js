"use strict";

var app = {
  modules: {
    discord: require('discord.js')
  },
  config: require('./config.js'),
  secrets: require('./secrets.js'),
  utility: require('./scripts/utility.js'),
  handler: require('./scripts/handler.js')
};

app.client = new app.modules.discord.Client();

app.client.on('message', app.handler.message);

app.client.login(app.secrets.bot_token);
