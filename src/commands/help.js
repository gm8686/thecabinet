const { Command } = require('discord-akairo');
	const { RichEmbed } = require('discord.js');
		const discord = require('discord.js')
			var colors = [
 				 "#00ffdd",
 					 "#48ff00",
  						"#f2ff00",
						"#0000ff",
					"#ff8800",
				"#aeff00",
			"#8c00ff",
		"#00ff26",
	"#00ff73"
]



class HelpCommand extends Command {
   constructor() {
    super('help', {
       aliases: ['help', 'support', 'guidance'],
        });
    }


exec(message, args) {
	var color = answers[Math.floor(Math.random() * 	colors.length)];	
				
				const guildCheck = new RichEmbed().setDescription(` ${message.author}, This command may only be used in a server.`).setColor('#ff0000')
						
						if(message.guild === null) return message.channel.send(guildCheck)
			
			const embed = new RichEmbed().setDescription(`The **${message.guild.name}** community is solely based off of the foundation set by our directors and chief's, who are voted upon by the citizens. Chiefs and Directors retain power to nominate citizens who are worthy of joining their respective branch.`).setColor(color)
		
message.channel.send(embed)
   }
}

module.exports = HelpCommand;
