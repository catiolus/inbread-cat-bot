module.exports = {
	name: 'kick',
    description: 'kick someone (but rn its only tagging them)',
    guildOnly: true,
	execute(message, args) {
		if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        const taggedUser = message.mentions.users.first();
    
        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};