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

 if (message.content.toLowerCase().startsWith(`${prefix}hello`)) {
	 let replies = [`Hello ${message.author.user}! I hope you are enjoying your time here. 😄`, "Hello! How are you? 😄", "Hello! I hope you are behaving yourself. 😄", "Hello! Staying out of trouble I hope. 😄", "Hello!", "Hello! Need a server invite? Do f!serverinvite for one!];
let result = Math.floor((Math.random() * replies.length));
	let helloEmbed = new Discord.RichEmbed()
	.setDescription(replies[result])
	.setColor("#FFC0CB") 
	.setTimestamp();
	  message.channel.send(helloEmbed);
}
	
	if (message.content.toLowerCase().startsWith(`${prefix}avatar`)) { 
      let player = message.mentions.members.first() || message.member
	   let user = player.user
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`, `${user.displayAvatarURL}`)
    .setTitle('Profile Picture')
    .setImage(user.displayAvatarURL)
    .setColor("#FFC0CB");
    return message.channel.send(avatarEmbed);
}
	
	if (message.content.startsWith(`${prefix}serverinfo`)) {		
    let sicon = message.guild.iconURL;
    let server = message.guild.name;
    let serverembed = new Discord.RichEmbed()
    .setTitle("👑 Server Information")
    .setDescription(`Information on ${server}:`)
    .setColor(0x374f6b)
    .addField('Server ID', message.guild.id, true)
    .addField('Server Name', message.guild.name, true)
    .addField('Humans', `${message.guild.members.filter(m => !m.user.bot).size}`, true)
    .addField('Bots', `${message.guild.members.filter(m => m.user.bot).size}`, true)
    .addField('Member Total', message.guild.memberCount, true)
    .addField('Role Total', message.guild.roles.size, true)
    .addField('Channel Total', message.guild.channels.size, true)
    .addField('Region', message.guild.region, true)
    .addField('Server Made', message.guild.createdAt.toLocaleDateString(), true)
    .addField('Server Owner', message.guild.owner, true)
    .setFooter(`${server}`, sicon)
    .setThumbnail(sicon) 
    .setTimestamp();
    return message.channel.send(serverembed);
  }
	
			
            if (message.content.startsWith(`${prefix}userinfo`)) { 
            let player = message.mentions.members.first() || message.member
            let iicon = player.user.displayAvatarURL;
            let roles = player.roles.map(role => role).join(" ");
	    let user = player.user
            let userEmbed = new Discord.RichEmbed()
            .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
            .setThumbnail(user.displayAvatarURL)
            .setColor('#2B547E')
            .addField('User ID', user.id, true)
            .addField('Current Tag', user.tag, true)
            .addField('Server Nickname', `${player.displayName}`, true) 
            .addField('Highest Member Role', `${player.highestRole.name}`, true)
            .addField('Roles', `${roles}`)
            .addField('Game/Playing', `${(user.presence.game && user.presence.game && user.presence.game.name) || 'None'}`, true)
            .addField('Status', user.presence.status, true)
            .addField('Bot', user.bot, true)
            .addField('Joined At:', `${player.joinedAt}`)
            .addField('Account Created On:', `${player.user.createdAt}`)
            .setThumbnail(iicon)
            .setTimestamp();
	return message.channel.send(userEmbed);
	}
	
	  if (message.content.startsWith(`${prefix}botinfo`)) {
    let player = message.mentions.members.first() || message.member
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("🤖 Bot Information")
    .setDescription("Information on WeatherDawn:")
    .setColor(0x374f6b)
    .setThumbnail(bicon)
    .addField("Bot ID", client.user.id, true)
    .addField("Bot Tag", client.user.tag, true)
    .addField('Bot Nickname', `${player.displayName}`, true) 
    .addField("Users", client.users.size, true)
    .addField("Date Of Creation", client.user.createdAt.toLocaleDateString(), true)
    .addField("Uptime", moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]'), true)
    .addField("Server Invite", "https://discord.gg/TGy7d9y", true)
    .setFooter("Created By @Dawn.Bots.INC", client.user.displayAvatarURL)
    .setTimestamp();
    return message.channel.send(botembed);
  }      
	
	    if (message.content.startsWith(`${prefix}serverinvite`)) {
      if (message.channel.type == "dm") return;

    message.channel.createInvite().then(a =>
    message.author.send(a.toString()))
    message.channel.send(`📥 Invite Sucessfully sent to your DMs. `)
    
  }
	
  
  
});

client.login(process.env.BOT_TOKEN);
