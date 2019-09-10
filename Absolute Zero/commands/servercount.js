const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed();
    embed.setTitle("Absolute Zero's server count");
    embed.setDescription(`I am proudly serving ${client.guilds.size} servers`);
    message.channel.send(embed)
}