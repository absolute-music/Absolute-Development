exports.run = (client, message, args) => {
    const memes = require('discord-meme-generator');
    memes.generate(client,message);
}