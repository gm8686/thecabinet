const { Command } = require('discord-akairo');
const { RichEmbed } = require('discord.js');

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help', 'support'],
            
        });
    }


exec(message) {
				const embed = new RichEmbed().setDescription(`The **${message.guild.name}** community is solely based off of the foundation set by our directors and chief's, who are voted upon by the citizens. Chiefs and Directors retain power to nominate citizens who are worthy of joining their respective branch.`).setColor('#ff00ae');
        message.channel.send(embed)
    }
}

module.exports = HelpCommand;
