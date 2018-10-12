const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('snekfetch');
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');

client.on(`ready`, () => {
  console.log(`I am ready to say hello to the world.`);
client.user.setActivity("King's Raid OST", {type: "LISTENING"});

});

client.on('message', async (message, member) => {
  	   let user = message.mentions.users.first(); 
	
  if (message.content.startsWith(`${prefix}hello`)) {
	let helloEmbed = new Discord.RichEmbed()
	.setAuthor(`Hello ${message.author.tag}!`) 
	.setDescription(`Hello member, how are you doing today?`)
	.setColor("#BA55D3")  
	.setTimestamp();
	  message.channel.send(helloEmbed);
}
	
	

	
	  if (message.content.startsWith(`${prefix}avatar`)) { 
	   let user = message.mentions.users.first(); 
if(!user) return message.channel.send("You didn't mention anyone..?"); 
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Profile Picture`)
    .setImage(user.displayAvatarURL)
    .setColor("#BA55D3");
    message.channel.send(avatarEmbed);
}
  
  
});

client.login(process.env.BOT_TOKEN);
