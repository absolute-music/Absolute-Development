const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed();
    embed.setTitle("Give us feedback!");
    embed.setDescription("https://www.writeacustomerreview.com/review/company.php?company_id=1a21d75e512771f69ef0349056372736");
message.channel.send(embed);
}