const Discord = require("discord.js");
const prefix = require("../prefix.json");
const fs = require("fs")
exports.run = (client, message, args) => {
    if(message.member.hasPermission("MANAGE_CHANNELS") || message.author.id === "568247122801983510"){
    let arg = args.join(' ');
    if(!arg)return(message.channel.send("Please input the prefix you want it to be!"))
    prefix[message.guild.id] = {
      prefix: arg
    };
  

  fs.writeFile("./prefix.json", JSON.stringify(prefix), (err) => {
    if (err) console.log(err)
  });

    let embed = new Discord.RichEmbed();
    embed.setTitle("Prefix Changed");
    embed.setColor("#36FF00")
    embed.setDescription("Prefix for " + message.guild.name + " has been set to `" + arg + "`");

    message.delete()
message.channel.send(embed);
    }else{
        message.channel.send("you must have MANAGE_CHANNELS permission to change prefix")
    }
}