const Discord = require("discord.js");
const prefix = require("../prefix.json");

exports.run = (client, message, args) => {
    if(prefix[message.guild.id]){
    const p = prefix[message.guild.id].prefix;
        let embed = new Discord.RichEmbed();
    embed.setTitle("general Commands");
    embed.setColor("#36FF00")
    embed.setDescription("Use A_help for other categories! <> = required, [] = not required");
    embed.addField(p + "ping", "Let the bot respond pong to you!");
    embed.addField(p + "help", "Category help page!");
    embed.addField(p + "feedback", "Submit a feedback!");
    embed.addField(p + "unicode", "You gotta test it out!");
    embed.addField(p + "stats", "Bot's complete stats");
    embed.addField(p + "userinfo <mention a user>", "get a users info");
    embed.addField(p + "joke", "get a random joke");
    embed.addField(p + "applyforstaff", "Apply for Absolute Zero Developers");
    embed.addField(p + "hastebin", "Let the bot create a haste bin file for you!");
    embed.addField(p + "invite", "Join our support server!");
    embed.addField(p + "usercount", "Get the bot's user count!");
    embed.addField(p + "servercount", "Get the bot's server count!");
    embed.addField(p + "ticket", "create a ticket");
    embed.addField(p + "getpremium <tier number(1 or 2)>", "buy premium!")
    
message.channel.send(embed);
    }else{
        let p = "A_";
            let embed = new Discord.RichEmbed();
    embed.setTitle("general Commands");
    embed.setColor("#36FF00")
    embed.setDescription("Use A_help for other categories! <> = required, [] = not required");
    embed.addField(p + "ping", "Let the bot respond pong to you!");
    embed.addField(p + "help", "Category help page!");
    embed.addField(p + "feedback", "Submit a feedback!");
    embed.addField(p + "unicode", "You gotta test it out!");
    embed.addField(p + "stats", "Bot's complete stats");
    embed.addField(p + "userinfo <mention a user>", "get a users info");
    embed.addField(p + "joke", "get a random joke");
    embed.addField(p + "applyforstaff", "Apply for Absolute Zero Developers");
    embed.addField(p + "hastebin", "Let the bot create a haste bin file for you!");
    embed.addField(p + "invite", "Join our support server!");
    embed.addField(p + "usercount", "Get the bot's user count!");
    embed.addField(p + "servercount", "Get the bot's server count!");
    embed.addField(p + "ticket", "create a ticket");
    embed.addField(p + "getpremium <tier number(1 or 2)>", "buy premium!")
    
message.channel.send(embed);
    }

}