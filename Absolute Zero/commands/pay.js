const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345
if(message.author.id !== "568247122801983510")return;

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    message.channel.send("He don't have any money!")
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;



  coins[pUser.id] = {
    coins: pCoins - parseInt(args[1])
  };

  message.channel.send(`${message.author} has taken ${pUser} ${args[1]} coins.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}