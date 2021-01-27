// Project Name: Robo Pigeon
// Author: Jenna Everard

// set up environment variables
const Discord = require('discord.js');
const client = new Discord.Client();

// Note: the following must be created, due to token, this has not been shared
const { prefix, token } = require('./config.json');

// replace this with ID of channel to send welcome message to
const welcome_channel = '804064589406404639';

// replace this with your welcome message
const welcome_msg = "Hi there! I'm Robo Pigeon, the pigeon bot destined to conquer your server (just kidding...unless?).\n I have my own set of commands that can be triggered by first typing !pigeon and then the action you require. Currently, I support the following: \n !pigeon meme \n !pigeon dance \n I'm also very talkative and **will** interrupt you to share my beautiful pigeon knowledge. \n \n p.s. will you be deemed worthy of joining my secret society?";

// collection of memes
const memes = ['https://i.redd.it/of3i4ccsi9p11.jpg',
		'https://78.media.tumblr.com/d5a98239eeb526660ad7d9c21dbc0fab/tumblr_oncqofTzpx1v4qe09o1_500.jpg',
		'http://img.memecdn.com/scumbag-pigeons_o_1797603.jpg',
		'https://www.viralviralvideos.com/wp-content/uploads/2017/04/33031877.jpg',
		'https://i.chzbgr.com/original/9154909696/h54677193/',
		'https://i.imgflip.com/1gtv2u.jpg',
		'https://pics.onsizzle.com/swag-pigeons-got-game-11554814.png',
		'https://www.eelkat.com/images/rainbow-pigeon-meme.jpg',
		'https://img.memecdn.com/is-this-a-pigeon_o_7230047.jpg',
		'https://i.pinimg.com/736x/43/23/c8/4323c86cb36555ec8933dd84574c40d5.jpg',
		'https://i.pinimg.com/originals/4f/7b/a6/4f7ba693325c7eb8033958458c6560df.png',
		'https://www.coolpun.com/images/coolpun/b8/b8d1dc227d1acadcf06284d083fbd1fb.jpeg',
		'https://wanna-joke.com/wp-content/uploads/2013/10/funny-picture-next-to-car-wash-pigeons.jpg',
		'https://funtimebirdy.files.wordpress.com/2013/02/44328_542033279150132_271635114_n.jpg',
		'https://wanna-joke.com/wp-content/uploads/2014/06/funny-picture-mask-pigeon.jpg',
		'https://pigeonsarentreal.co.uk/wp-content/uploads/2019/03/pigeon-drone.jpg'
		]

// collection of dances
const dances = ['https://www.youtube.com/watch?v=RAP0fzBsjQk',
		'https://www.youtube.com/watch?v=x0ZfwSQDLK0',
		'https://www.youtube.com/watch?v=Ut-fJCc0zS4'
		]

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	const channel = client.channels.cache.get(welcome_channel);
	channel.send(welcome_msg);
}); 

client.on('message', msg => {
	if (msg.content.startsWith(prefix)) {
		if (msg.content.endsWith('meme')) {
			const meme_num = Math.floor(Math.random() * 16);
			const meme_link = memes[meme_num];
			msg.channel.send("**Meme me up, Scotty!**", {files: [meme_link]});
		}
		else if (msg.content.endsWith('dance')) {
			const dance_num = Math.floor(Math.random() * 3);
			const dance_link = dances[dance_num];
			msg.channel.send("**My dancing is en pointe** " + dance_link);
		}
	}
	else if (msg.content.includes('pigeon') && msg.author != client.user) {
		msg.reply("Do you want to be a **pigeon** too? (hint: type 💚)");
	}
	else if (msg.content.includes('coo') && msg.author != client.user) {
		msg.reply("Did somebody say **coo**???", {files: ["https://media.tenor.com/images/15d34498b49230d12160be443032e96e/tenor.gif"]});	
 	}
	else if (msg.content.includes('hoo') && msg.author != client.user) {
		msg.reply("As Hermione would say:", {files: ["http://1.bp.blogspot.com/-UfWqzanyIOw/UhyEEE-8xZI/AAAAAAAAI-I/pWrcBbuQe3Y/s1600/tumblr_mqiy34VtMt1rrnwc4o1_250.gif"]}); 
	}
 });

client.on('messageReactionAdd', async (reaction, user) => {
	console.log('ALERT REACTION BEEP BEEP BEEP');
	if(reaction.emoji.name == '💚' && reaction.message.author == client.user) {
		const member = await reaction.message.guild.members.fetch(user.id);
		member.roles.add('803787090503532545');
	}
});

client.login(token);

