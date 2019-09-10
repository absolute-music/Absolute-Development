const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed();
    embed.setTitle("Please choose the help catagories!");
    embed.setColor("#0400FF")
    embed.setDescription("A_<category>");
    embed.addField("moderation", "See the moderation commands");
    embed.addField("general", "See the general commands");
    embed.addField("premium", "See the premium only commands");
    embed.addField("nsfw", "See the nsfw commands");
    embed.addField("fun", "See the fun commands");
    embed.addField("economy", "See the economy commands")
message.channel.send(embed);
}