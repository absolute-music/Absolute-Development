const Discord = require("discord.js");
const prefix = require("../prefix.json");

exports.run = (client, message, args) => {
    if(prefix[message.guild.id]){
    const p = prefix[message.guild.id].prefix;
        let embed = new Discord.RichEmbed();
    embed.setTitle("Premium Only Commands");
    embed.setColor("#36FF00")
    embed.setDescription("Use A_help for other categories! <> = required, [] = not required");
    embed.addField(p + "weather <city name>", "send you weather for a location");
    embed.addField(p + "shorturl <url>", "Shorten a Url");

    
message.channel.send(embed);
    }else{
        let p = "A_";
            let embed = new Discord.RichEmbed();
    embed.setTitle("Premium Only Commands");
    embed.setColor("#36FF00")
    embed.setDescription("Use A_help for other categories! <> = required, [] = not required");
    embed.addField(p + "weather <city name>", "send you weather for a location");
    embed.addField(p + "shorturl <url>", "Shorten a Url");
    
message.channel.send(embed);
    }

}