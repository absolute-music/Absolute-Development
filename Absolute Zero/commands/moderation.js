const Discord = require("discord.js")
const prefix = require("../prefix.json");

exports.run = (client, message, args) => {
            if(prefix[message.guild.id]){
    const p = prefix[message.guild.id].prefix;
        let embed = new Discord.RichEmbed();
    embed.setTitle("Moderation Commands");
    embed.setColor("#FF6C00");
    embed.setDescription("Use A_help for other categories! <> = required [] = not required");
    embed.addField(p + "kick <ping a member>", "kick someone! You must have kick members permission to use it");
    embed.addField(p + "ban <ping a member>", "Ban someone! You must have ban members permission to use it");
    embed.addField(p + "tempmute <ping a member> <mutetime>", "mute someone for a certain time! You must have manage server permission to use it");
    embed.addField(p + "prefix <enter prefix you want>", "set prefixfor your server! You must have manage channels permission to use it");
    message.channel.send(embed);
    }else{
        let p = "A_"
            let embed = new Discord.RichEmbed();
    embed.setTitle("Moderation Commands");
    embed.setColor("#FF6C00");
    embed.setDescription("Use A_help for other categories! <> = required [] = not required");
    embed.addField(p + "kick <ping a member>", "kick someone! You must have kick members permission to use it");
    embed.addField(p + "ban <ping a member>", "Ban someone! You must have ban members permission to use it");
    embed.addField(p + "tempmute <ping a member> <mutetime>", "mute someone for a certain time! You must have manage server permission to use it");
    embed.addField(p + "prefix <enter prefix you want>", "set prefixfor your server! You must have manage channels permission to use it");
    message.channel.send(embed);
    }

}