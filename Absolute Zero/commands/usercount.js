const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed();
    embed.setTitle("Absolute Zero's user count");
    embed.setDescription(`I am proudly serving ${client.users.size} users`);
    message.channel.send(embed)
}