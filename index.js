const Discord = require ('discord.js');
const pluralize = require('pluralize');
const { AkairoClient } = require('discord-akairo');
const client = new AkairoClient({
    ownerID: '618080309342109749',
    prefix: ';',
    commandDirectory: './src/commands/',
    inhibitorDirectory: './src/inhibitors/'
});
 
client.login(TOKENworkAROUND).then(() => {
	console.log('[INFO]: Ready!')
});
