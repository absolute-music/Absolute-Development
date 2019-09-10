const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(message.author.id !== "568247122801983510")return("it is a owner only cmd")
    let dUser = message.guild.member(message.mentions.users.first()) || client.users.find("id", args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a message!')

    dUser.send(dMessage)
}