let Discord = require('discord.js');
let premium = require("../database.json")
exports.run = (client, message, args) => {
    if(!premium[message.author.id])return(message.channel.send("you don't have premium!"));
    if(message.guild.id !== "568920278877470730")return(message.channel.send("you are in the wrong server!"));
    message.member.addRole(message.guild.roles.find("name", "Absolute Premium Owner"))
}