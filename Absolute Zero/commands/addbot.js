const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let banned = message.guild.get("264445053596991498").id;
  if(banned)return;
    let arg = args.join(' ');
    if(!arg)return(message.channel.send("Please enter the advertisement for your bot.\nRules For Bot Listing: Please use A_botlist for more info"));
    let embed = new Discord.RichEmbed();
    embed.setTitle("Thank you For Submitting Your Bot!");
    embed.setDescription("Some where in your advertisement has to have it's invite link-we will make that into a button. Thank you for advertising with us.");
    embed.addField("Your Description", `${arg}`)
    message.channel.send(embed);
    client.channels.get("619039536319823882").send("A bot have been added to bot advertising queue! descroption: " + arg + "|by " + message.author.id)
    message.author.send("Your Bot is now in our queue for approval! Please wait patiently.")
}