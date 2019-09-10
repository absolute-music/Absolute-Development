const prefixes = require("../prefix.json")
const active = new Map();

 exports.run = async(client, message) => {
     
  if(prefixes[message.guild.id]){
      let prefix = prefixes[message.guild.id].prefix;
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) {
    let ops = {
      active: active
    }
//if(message.author.id !== '568247122801983510')return message.channel.send('commands temporarily disable for bot updates. Music cmds will still work')
 let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let { msg } = require('discord.js')
  let commandfile = client.commands.get(cmd.slice(prefix.length));
if(!commandfile) return;    
    commandfile.run(client,message,args,msg,ops);
      
 }
  }else{
    let ops = {
      active: active
    }
    let prefix = "A_";
  if (message.author.bot) return;
 if(message.channel.type === "dm")message.channel.send("Welcome To Absolute Development Support! Please enter what you need help on and where you need help on(ex. I need help on blah and it is from Absolute Zero). Our staff member will contact you through THIS CHAT when we sees it.")
  if (message.content.startsWith(prefix)) {
//if(message.author.id !== '568247122801983510')return message.channel.send('commands temporarily disable for bot updates. Music cmds will still work')
 let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let { msg } = require('discord.js')
  let commandfile = client.commands.get(cmd.slice(prefix.length));
if(!commandfile) return;    
    commandfile.run(client,message,args,msg,ops);
 } 
  }
  }