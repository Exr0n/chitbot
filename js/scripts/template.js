"use strict";

module.exports = {
  Server: class {
    constructor (app, guild) {
      this.guild = guild;
      this.options = app.config.defaultGuildOptions;
    }

    onMessage (message) {
      for (let prefix of this.options.prefix) if (message.cleanContent.startsWith(prefix)) {
        // resolve command
        let split = message.cleanContent.slice(prefix.length).trim().split(' ');

        let retmess = '';
        switch (split[0].trim()) {
          case "activate":
            if (this.options.channels.contains(message.channel.id)) {
              retmess = `This channel is already active! Try \`${prefix}deactivate\`!`;
            } else {
              this.options.channels.push(message.channel.id);
              retmess = `This channel has been activated!`;
            }
            break;
          case "deactivate":
            let index = this.options.channels.findIndex((e) => e === message.channel.id);
            if (index === -1) {
              retmess = `This channel is not active! Try \`${prefix}activate\`!`;
            } else {
              this.options.channels.splice(index, 0);
              retmess = `This channel has been deactivated!`;
            }
            break;
          case "prefix":
// todo
            if (this.options.prefix.contains(prefix)) {
              this.options.
              retmess = ``
            }
            break;
          default:
            message = "`Unkown command...`"; // todo: add a help thing
            break;
        }
        message
        return;
      }

      if (this.options.channels.contains(message.channel.id)) {
        app.respond(message.cleanContent, message.channel.send);
      }
    }
  }
}
