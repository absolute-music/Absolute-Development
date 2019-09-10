const Discord = require('discord.js');
const prefix = require("../prefix.json");

exports.run = (client, message, args) => {
        if(prefix[message.guild.id]){
    const p = prefix[message.guild.id].prefix;
        let embed = new Discord.RichEmbed();
    embed.setTitle("Economy commands!");
    embed.setColor("#0400FF")
    embed.setDescription("Use A_help for other categories! <> = required, [] = not required");
    embed.addField(p + "coins", "See your coins!");
    message.channel.send(embed)
    }else{
        let p = "A_";
            let embed = new Discord.RichEmbed();
    embed.setTitle("Economy commands!");
    embed.setColor("#0400FF")
    embed.setDescription("Use A_help for other categories! <> = required, [] = not required");
    embed.addField(p + "coins", "See your coins!");
    message.channel.send(embed)
    }

}