const got = require('got');
const Discord = require("discord.js")
const premium = require("../database.json");
exports.run = async (client, msg, args, message) => {
    if(!premium[msg.author.id])return(msg.channel.send("Only Premium members could shorten urls!"))
    if(premium[msg.author.id].premium !== 1)return(msg.channel.send("Your 24 hour premium is over! Vote Again to get another 24 hours!"))
    const url = args.join(' ');
    if(!url)return(msg.channel.send('Please provide a url to shorten!'))
    msg.delete();

    const res = await got(`http://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    let embed = new Discord.RichEmbed();
    embed.setTitle("Link Shortened!")
    embed.addField("Link", url);
    embed.addField("Shortened Link", res.body)
    msg.channel.send(embed);

};