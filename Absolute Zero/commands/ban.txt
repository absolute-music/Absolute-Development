exports.run = (client, message, [mention, ...reason]) => {


  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");


  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.reply("");


  const banMember = message.mentions.members.first();


  banMember.ban(reason.join(" ")).then(member => {

    message.reply(`${member.user.username} was succesfully banned.`);

  });

};