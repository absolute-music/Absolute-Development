const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed();
    embed.setTitle("Create a support ticket(supports any languages that could be translated in google translate)");
    embed.setDescription("https://forms.gle/ZgVreWb2y4QAUH7N8");
    message.channel.send(embed);
}