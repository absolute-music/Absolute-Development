const { Client, Util } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ fetchAllMembers: true });
const fs = require("fs");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const Enmap = require("enmap");
const DBL = require("dblapi.js");
const queue = new Map();
const ms = require("ms");
const api = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4MzgzNTUwMTc0NDg4MTY2NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTYzMDgzNDgwfQ.rkzfAR-CJzhIk0CsuxKXHb4zhSul8tEUoHS2h9LHQQE'
const dbl = new DBL(api, { webhookPort: 5000, webhookAuth: 'password' });
const premium = require("./database.json");
const coins = require("./coins.json");

dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  client.channels.get("570068801652260874").send(`User with ID ${vote.user} just voted!`);
    console.log("`User with ID ${vote.user} just voted!`")
premium[vote.user] = {
    premium: 1
}
fs.writeFileSync('./database.json', JSON.stringify(premium)), (err) => {
    if (err) console.log(err)
  };
  setTimeout(function(){
let premium = require("./database.json")
// figure out new_id and payload
premium[vote.user] = {
    premium: 2
}
fs.writeFileSync('./database.json', JSON.stringify(premium)), (err) => {
    if (err) console.log(err)
  };
  }, 86400000);
});
//client.on('message', message => {
//    if(message.content === "A_premium"){
//    premium[message.author.id] = {
//      premium: "1"
//  }
//  fs.writeFile("./database.json", JSON.stringify(premium), (err) => {
//    if (err) console.log(err)
//  });
//message.channel.send("you are now premium!")
//    }
//})


//client.on('message', message => {
//  //!pay @isatisfied 59345
//if(message.content === "A_premium"){
// let messageArray = message.content.split(" ");
//  let args = messageArray.slice(1);
//let arg = args.join('');
//if(!arg)return(message.channel.send("Please enter what tier you are buying(tier one: A_premium 1, tier two: A_premium 2)"));
//    if(arg === "1"){
//  if(!coins[message.author.id]){
//    return message.reply("You don't have any coins!")
//  }
//
//  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//
//  if(!coins[pUser.id]){
//    coins[pUser.id] = {
//      coins: 0
//    };
//  }
//
//  let sCoins = coins[message.author.id].coins;
//
//  if(sCoins < '200') return message.reply("Not enough coins there!");
//
//  coins[message.author.id] = {
//    coins: sCoins - parseInt('200')
//  };
//
//
//  message.channel.send(`${message.author} has given ${pUser} ${args[1]} coins.`);
//
//  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
//    if(err) cosole.log(err)
//  });
//}
//
//if(arg === "2"){
//      if(!coins[message.author.id]){
//    return message.reply("You don't have any coins!")
//  }
//
//  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//
//  if(!coins[pUser.id]){
//    coins[pUser.id] = {
//      coins: 0
//    };
//  }
//
//  let sCoins = coins[message.author.id].coins;
//
//  if(sCoins < '300') return message.reply("Not enough coins there!");
//
//  coins[message.author.id] = {
//    coins: sCoins - parseInt('300')
//  };
//
//
//  message.channel.send(`${message.author} has purchase premium tier two`);
//
//  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
//    if(err) cosole.log(err)
//  });
//}
//
//if(message.content === "A_coins"){
//     if(!coins[message.author.id]){
//    coins[message.author.id] = {
//      coins: 0
//    };
//  }
//
//  let uCoins = coins[message.author.id].coins;
//
//
//  let coinEmbed = new Discord.RichEmbed()
//  .setAuthor(message.author.username)
//  .setColor("#00FF00")
//  .addField("💸", ACoins);
//
//  message.channel.send(coinEmbed);
//
//}
//});

dbl.on('posted', () => {
  console.log('Server count posted!');
})
const dmSupport = require("discord-dmsupport")
client.dm = new dmSupport(client, "568920278877470730", "568963733716467712");
dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
const APIkey = 'AIzaSyB9C267jkB6AsLRclbx2kkzjsqs6R4MBa0'
const youtube = new YouTube(APIkey);
client.once('ready', () => {
    function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
setInterval(() => {
        dbl.postStats(client.guilds.size);
        console.log("server count posted!")
    }, 1800000);
client.dm.startService();
	console.log('Bot Ready');

	client.user.setPresence({
        game: {
            name: `Bot developer applications open| The Admin#1887`,
            type: "STREAMING",
            url: "https://www.twitch.tv/j5rryzh1ng"
        }
    });
});

var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */


client.on("message", async message => {
  let banned = client.guilds.get("264445053596991498");
  if(banned)return;
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💸", `${coinAmt} Acoins added!`);

  message.channel.send(coinEmbed);
  }
});
client.on('guildCreate', guild => {
    guild.members.get(guild.ownerID).send("thank you for adding me to your guild! use A_help to see what you can do!").catch();
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded " + file)
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});
    //Events "handler"
    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            console.log("Successfully loaded " + file)
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
});

client.login('NTgzODM1NTAxNzQ0ODgxNjY0.XWHiOA.f85Ai95XDKD-fLmAZ85_YaTP-LM');