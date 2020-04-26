module.exports = {
	name: 'gay',
	description: 'calls people gay',
	execute(message, args) {
		const taggedUser = message.mentions.users.first();
    
        message.channel.send(`${taggedUser.username} has the big gay`);
	},
};