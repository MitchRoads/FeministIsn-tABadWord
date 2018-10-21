const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('snekfetch');
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const moment = require('moment');
require('moment-duration-format');

client.on(`ready`, () => {
  console.log(`Feminism Is POWER!`);
client.user.setActivity("All Sides | f!help", {type: "LISTENING"});

});

client.on('message', async (message) => {

 if (message.content.toLowerCase().startsWith(`${prefix}hello`)) {
	 let replies = [`Hello ${message.author.tag}! I hope you are enjoying your time here. 😄`, "Hello! How are you? 😄", "Hello! I hope you are behaving yourself. 😄", "Hello! Staying out of trouble I hope. 😄", "Hello! 😄", "Hello! Need a server invite? Do f!serverinvite for one! 📨",];
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
	
	 if (message.content.toLowerCase().startsWith(`${prefix}serverinfo`)) {		
    let sicon = message.guild.iconURL;
    let server = message.guild.name;
    let serverembed = new Discord.RichEmbed()
    .setTitle("👑 Server Information")
    .setDescription(`Information on ${server}:`)
    .setColor("#FFC0CB")
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
	
			
            if (message.content.toLowerCase().startsWith(`${prefix}userinfo`)) { 
            let player = message.mentions.members.first() || message.member
            let iicon = player.user.displayAvatarURL;
            let roles = player.roles.map(role => role).join(" ");
	    let user = player.user
            let userEmbed = new Discord.RichEmbed()
            .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
            .setThumbnail(user.displayAvatarURL)
            .setColor("#FFC0CB")
            .addField('User ID', user.id, true)
            .addField('Current Tag', user.tag, true)
            .addField('Server Nickname', `${player.displayName}`, true) 
            .addField('Highest Member Role', `${player.highestRole.name}`, true)
            .addField('Roles', `${roles}`)
            .addField('Game/Playing', `${(user.presence.game && user.presence.game && user.presence.game.name) || 'None'}`, true)
            .addField('Status', user.presence.status, true)
            .addField('Bot', user.bot, true)
            .addField('Joined Server At:', `${player.joinedAt}`)
            .addField('Account Created On:', `${player.user.createdAt}`)
            .setThumbnail(iicon)
            .setTimestamp();
	return message.channel.send(userEmbed);
	}
	
 if (message.content.toLowerCase().startsWith(`${prefix}botinfo`)) {
    let player = message.mentions.members.first() || message.member
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("🤖 Bot Information")
    .setDescription("Information on WeatherDawn:")
    .setColor("#FFC0CB")
    .setThumbnail(bicon)
    .addField("Bot ID", client.user.id, true)
    .addField("Bot Tag", client.user.tag, true)
    .addField('Bot Nickname', `${player.displayName}`, true) 
    .addField("Server", `${client.users.size} users`, true)
    .addField("Date Of Creation", client.user.createdAt.toLocaleDateString(), true)
    .addField("Uptime", moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]'), true)
    .setFooter("Created By @Dawn.Bots.INC", client.user.displayAvatarURL)
    .setTimestamp();
    return message.channel.send(botembed);
  }      
	
	     if (message.content.toLowerCase().startsWith(`${prefix}serverinvite`)) {
      if (message.channel.type == "dm") return;

    message.channel.createInvite().then(a =>
    message.author.send(a.toString()))
    message.channel.send(`📩 Invite Sucessfully sent to your DMs. `)
    
  }
	if (message.content.toLowerCase().startsWith(`${prefix}definefeminism`)) {
    let server = message.guild.name;
    let servericon = "https://i.imgur.com/mi3f0yt.png";
    let feministembed = new Discord.RichEmbed()
    .setTitle("<:shellhappy:503338404877172757> Feminism Still Isn't A Bad Word")
    .setURL('https://www.merriam-webster.com/dictionary/feminism')
    .setDescription(`Information about Feminism:`)
    .setColor("#FFC0CB")
    .addField('What does actually Feminism mean?', `According to the dictinoary, feminism is the theory of the political, economic, and social equality of the sexes.`, true)
    .addField('How long has feminism been around?', `The feminist movement has been around since 1841 (first wave feminism), but it didn't get much attention until around the 1960s and 1970s when it sparked back up again and when changes started to happen for women to have more right then they had a the time. This was known as the women's movement at the time (second wave feminism).`, true)
    .addField('Why do we still need feminism?' , `Because women don't have equal rights as men do, this is a fact.` , true)
    .addField('Why are radical feminists so focused on?', `The simple reason this is because of memes and people not taking feminist seriously as it should be. Seeing how most of these people are men who do this it isn't surprising.`, true)
    .addField('Is feminism, BLM (black lives matter), and LGBT+ the same thing?', `Most people who support feminism are most likely a supporter of the LGBT+ or BLM for they all want the same thing in the end, equal rights no matter of gender, sex, creed, or color. But they are also aiming for something different in their own way so while they have a similiar goal, they aren't all the same.`, true)
    .addField('Why should I be a feminist?', `While you don't *need* to be a feminist to believe in equal rights for men and women, having the label as a feminist makes you sound more believable especially with how bad things are right now.`, true)
    .setImage("https://i.imgur.com/rLMZUPk.png")
    .setFooter(`${server}`, `${client.user.displayAvatarURL}`)
    .setThumbnail(servericon) 
    .setTimestamp();
    return message.channel.send(feministembed);
}	
	
		  if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
	let server = message.guild.name;
	let helpembed = new Discord.RichEmbed()
	.setTitle(`<:logo:503355691898241024> Help Menu`)
	.setDescription('Below are the commands for this bot, enjoy and use them respectfully.')
	.setColor("#FFC0CB") 
        .addField('👩 `f!avatar`', "The avatar of a user displays after using this command.")
        .addField('🤖 `f!botinfo`', "Information on our server bot.")
        .addField('<:shellhappy:503338404877172757> `f!definefeminism`', "Learn about feminism, that is the point of this server after all.")
	.addField('❓ `f!help`', "A help menu that provides you with the commands of the bot.")
        .addField('📢 `f!hello`', "Hello! You will get a random hello response.")
	.addField('<:youtube:503360745480912916> `f!support`', "Did you know that the owner has a youtube and twitch channel amoung a few other things? Go check them out.")
        .addField('🏓 `f!ping`', "Pingggggggg!")
	.addField('ℹ `f!serverinfo`', `Information about ${server}.`)
	.addField('✉ `f!serverinvite`', "You will be send an invite to the server.")
        .addField('💁 `f!userinfo`', "Want info about a person? Such as their roles and how long they have been here?.")
	.setTimestamp(); 
	message.channel.send(helpembed);
	message.react("✅")
	  }
	
	if (message.content.toLowerCase().startsWith(`${prefix}ping`)) {
    let msgping1 = new Date();
    let clientping = new Date() - message.createdAt;
    let msgping2 = new Date() - msgping1;
    let pingembed = new Discord.RichEmbed()
       .setColor("#FFC0CB")
        .addField('🏓 Your Ping:', Math.floor(client.ping) + 'ms')
        .addField('🏓 Bot Ping:', Math.floor(clientping) + 'ms')
        .setTimestamp()
        .setFooter(`Ping request: ${message.author.tag}`);      
    return message.channel.send(pingembed);
	}
	
		if (message.content.toLowerCase().startsWith(`${prefix}support`)) {
    let server = message.guild.name;
    let shellicon = "https://i.imgur.com/OOh2U1M.png";
    let feministembed = new Discord.RichEmbed()
    .setTitle("<:twitchchannel:503368500979695617> Support Us!")
    .setURL('https://www.paypal.com/donate/?token=k0BhjIcVzvJ9I35z4QQ8ab_JpWcmZLmRVyvWsR5t7YeUJQAmKUvGv-w9Bl7Bpin-pKh0XW&country.x=US&locale.x=US')
    .setDescription(`Links to other social media:`)
    .setColor("#FFC0CB")
    .addField(`ShellNotSpeak's Youtube Channel`, `https://www.youtube.com/user/MissNeeNeeCO/featured`, true)
    .addField(`ShellNotSpeak's Twitch Channel`, `https://www.twitch.tv/neeneeco`, true)
    .addField(`ShellNotSpeak's Twitch Server`, `https://app.twitch.tv/invite/ZzhWSI`, true)
    .addField('Patreon', `https://www.patreon.com/ShellNotSpeak`, true)
    .addField('Donations', `Press on Support Us to get to our paypal! Thanks in advance. <:shellhappy:503338404877172757>` , true)
    .setFooter(`${server}`, `${shellicon}`)
    .setThumbnail(shellicon) 
    .setTimestamp();
    return message.channel.send(feministembed);
}	
});
	client.on('guildMemberAdd', (member) => {
  let user = member.user.tag;
  let guild = member.guild;
  let server = member.guild.name;
  let welcomeembed = new Discord.RichEmbed()
      .setTitle(`Welcome ${user}!`)
      .setColor("#FFC0CB")
      .setDescription(`Welcome to **Feminist Isn't A Bad Word!** Our goal is to keep every avanue of speech open when talking about feminist ideals. We allow anyone to talk and speak! We do not ban though, we do police the server to a point however.  I mean the Nazi sign isn't funny after all. Anyways, make sure if you are accepted into the server to check out the f!definefeminism command to learn about what feminism actually means. And don't forget to read the rules! That is very important.`)
      .setTimestamp();
    member.send(welcomeembed)
	      });
client.login(process.env.BOT_TOKEN);
