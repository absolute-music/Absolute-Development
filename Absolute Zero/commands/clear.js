const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("please enter a number");
    message.delete();
    sleep(3000)
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}