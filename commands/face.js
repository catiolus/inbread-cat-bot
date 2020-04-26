const cool = require('cool-ascii-faces');

module.exports = {
    name : 'face',
    description : 'shows random ASCII face',
    cooldown : 0.1,
    execute (message) {
        message.channel.send(cool())
    }
};