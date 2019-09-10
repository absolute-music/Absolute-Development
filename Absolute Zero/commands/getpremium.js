const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
let premium = require("../database.json")
module.exports.run = async (bot, message, args) => {
 let embed = new Discord.RichEmbed();
 embed.setTitle("Want to get premium? For Free?");
 embed.setDescription("Then Vote for me at http://tinyurl.com/y5sxumnp to get premium for the next 24 hours!")
 message.channel.send(embed)

}