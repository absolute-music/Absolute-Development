const Discord = require('discord.js');
const prefix = require("../prefix.json");

exports.run = (client, message, args) => {
                    if(prefix[message.guild.id]){
    const p = prefix[message.guild.id].prefix;
        let embed = new Discord.RichEmbed();
    embed.setTitle("Moderation Commands");
    embed.setDescription("Use A_help for other categories! <> = required [] = not required");
    embed.setColor("#0400FF")
    embed.addField(p + "8ball <question>", "See the moderation commands");
    embed.addField(p + "rate <mention a member>", "rate the pinged user");
    embed.addField(p + "urban <text>", "Let the bot do the urban stuff");
    embed.addField(p + "mcserver", "Join our official mc server!");
message.channel.send(embed);
    }else{
        let p = "A_"
            let embed = new Discord.RichEmbed();
    embed.setTitle("Moderation Commands");
    embed.setDescription("Use A_help for other categories! <> = required [] = not required");
    embed.setColor("#0400FF")
    embed.addField(p + "8ball <question>", "See the moderation commands");
    embed.addField(p + "rate <mention a member>", "rate the pinged user");
    embed.addField(p + "urban <text>", "Let the bot do the urban stuff");
    embed.addField(p + "mcserver", "Join our official mc server!");
message.channel.send(embed);
    }

}