const { Inhibitor } = require('discord-akairo');

class BlacklistInhibitor extends Inhibitor {
    constructor() {
        super('blacklist', {
            reason: 'blacklist'
        })
    }

    exec(message) {
        const blacklist = ['123'];
        return blacklist.includes(message.author.id);
    }
}

module.exports = BlacklistInhibitor;
