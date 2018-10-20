const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('snekfetch');
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const moment = require('moment');
require('moment-duration-format');

client.on(`ready`, () => {
  console.log(`Feminism Is POWER!`);
client.user.setActivity("To All Sides", {type: "LISTENING"});

});

client.on('message', async (message) => {

  if (message.content.startsWith(`${prefix}hello`)) {
	  let player = message.mentions.members.first() || message.member
  let user = player.user
	 let replies = [`Hello ${message.author.tag}! I hope you are enjoying your time here. 😄`, "Hello! How are you? 😄", "Hello! I hope you are behaving yourself. 😄", "Hello! Staying out of trouble I hope. 😄", "Hello!",];
let result = Math.floor((Math.random() * replies.length));
	let helloEmbed = new Discord.RichEmbed()
	.setDescription(replies[result])
	.setColor("#FFC0CB") 
	.setTimestamp();
	  message.channel.send(helloEmbed);
}
	
	 if (message.content.startsWith(`${prefix}avatar`)) { 
      let player = message.mentions.members.first() || message.member
	   let user = player.user
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`, `${user.displayAvatarURL}`)
    .setTitle('Profile Picture')
    .setImage(user.displayAvatarURL)
    .setColor("#FFC0CB");
    return message.channel.send(avatarEmbed);
}
  
  
});

client.login(process.env.BOT_TOKEN);
