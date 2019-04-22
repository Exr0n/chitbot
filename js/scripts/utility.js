"use strict";
const fs = require('fs');

const config = require('./config.js');

const logstream = fs.createWriteStream(config.sys.logfile, {flags: 'a'});

module.exports = {
  noop: () => {},
  niceStringify: (json) => JSON.stringify(json, (k,v)=>v, 2),
  log: (text) => {
    logstream.write(text + '\n');
    console.log(text);
  },
  status: (type, json) => {
    let message = '';
    switch (type) {
      case 'login':
        message = `  joined new server\n  ${module.exports.niceStringify(json)}`
        break;
      case 'new_server':
        break;
      default:
        message = `  unkown status "${type}"\n  with json: \n${module.exports.niceStringify(json)}`

      module.exports.log(`[${Date()}] with version ${config.version}\n${message}`);
    }
  }
}
