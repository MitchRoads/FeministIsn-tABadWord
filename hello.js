const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('snekfetch');
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');

client.on(`ready`, () => {
  console.log(`I am ready to say hello to the world.`);
client.user.setActivity(`King's Raid`);

});

client.on('message', async (message) => {
  const color = require('../botconfig.json');

if (message.content.startsWith(`${prefix}hello`)) {
  let helloEmbed = new Discord.RichEmbed()
  .setTitle("Hello hello!")
  .setColor(color)
  .setField(`Hello member. How are you doing today?`)
  message.channel.send(helloEmbed)
}
  
});

client.login(process.env.BOT_TOKEN);
