const Discord = require('discord.js');
const prefix = require("../prefix.json");

exports.run = (client, message, args) => {
                if(prefix[message.guild.id]){
    const p = prefix[message.guild.id].prefix;
        let embed = new Discord.RichEmbed();
    embed.setTitle("nsfw commands");
    embed.setDescription("Use A_help for other categories! <> = required, [] = not required");
    embed.addField(p + "memes", "Get a random meme");
    message.channel.send(embed);
    }else{
        let p = "A_"
            let embed = new Discord.RichEmbed();
    embed.setTitle("nsfw commands");
    embed.setDescription("Use A_help for other categories! <> = required, [] = not required");
    embed.addField(p + "memes", "Get a random meme");
    message.channel.send(embed);
    }


}