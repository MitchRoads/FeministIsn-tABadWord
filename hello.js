const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('snekfetch');
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const moment = require('moment');
require('moment-duration-format');

client.on(`ready`, () => {
  console.log(`Feminism Is POWER!`);
client.user.setActivity("**To All Sides**", {type: "LISTENING"});

});

client.on('message', async (message, member) => {
  	   let user = message.mentions.users.first(); 
	
  if (message.content.startsWith(`${prefix}hello`)) {
	 let replies = ["Hello ${member.author.tag}! I hope you are enjoying your time here. 😄", "Hello! How are you? 😄", "Hello! I hope you are behaving yourself. 😄", "Hello! Staying out of trouble I hope. 😄", "Hello!"];
let result = Math.floor((Math.random() * replies.length));
	let helloEmbed = new Discord.RichEmbed()
	.setDescription(replies[result])
	.setColor("#FFC0CB") 
        .setFooter(`Said Hello To ${user.tag}`)
	.setTimestamp();
	  message.channel.send(helloEmbed);
}
	
	

	
	  if (message.content.startsWith(`${prefix}avatar`)) { 
	   let user = message.mentions.users.first(); 
if(!user) return message.channel.send("You didn't mention anyone..?"); 
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Profile Picture`)
    .setImage(user.displayAvatarURL)
    .setColor("#FFC0CB");
    message.channel.send(avatarEmbed);
}
  
  
});

client.login(process.env.BOT_TOKEN);
