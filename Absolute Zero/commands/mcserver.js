const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed();
    embed.setTitle("Join Our Official Minecraft Server!")
    embed.setDescription("Come in, gather resource, battle, survival, all at one place, 99% uptime, join at 45.32.95.37");
    message.channel.send(embed);
}