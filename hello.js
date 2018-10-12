const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('snekfetch');
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');

client.on(`ready`, () => {
  console.log(`I am ready to say hello to the world.`);
client.user.setActivity(`King's Raid`);

});

if (message.content.startsWith(`${prefix}hello`)) {
  return message.channel.send(`Hello member. How are you doing today?`)
}

client.login(process.env.BOT_TOKEN);
