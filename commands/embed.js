// at the top of your file
const Discord = require('discord.js');

module.exports = {
	name: 'embed',
	description: 'it embeds shit',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#883778')
            .setTitle('lets see if embed works')
            .setURL('https://thehardestlife.weebly.com/')
            .setAuthor('me', 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png', 'https://discord.js.org')
            .setDescription('just a test if i can embed shit')
            .setThumbnail('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png')
            .addFields(
                { name: 'shit', value: 'bruh' },
                { name: 'damn', value: 'bruh moment', inline: true },
                { name: 'oof', value: 'bruh moment', inline: true },
            )
            .setImage('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png')
            .setTimestamp()
            .setFooter('footer text lmao', 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png');
        
        message.channel.send(exampleEmbed);
	},
};
