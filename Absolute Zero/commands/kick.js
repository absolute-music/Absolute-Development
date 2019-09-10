exports.run = (client, message, [mention, ...reason]) => {


  if (message.mentions.members.size === 0)
    return message.channel.send("Please mention a user to kick");


  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.channel.send("You don't have permission");


  const kickMember = message.mentions.members.first();


  kickMember.kick(reason.join(" ")).then(member => {

    message.reply(`${member.user.username} was succesfully kicked.`);

  });

};