const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed();
    embed.setTitle("Support Server welcomes you!");
    embed.setDescription("Use the link https://discordapp.com/invite/vWUr5W6");
    message.channel.send(embed);
}