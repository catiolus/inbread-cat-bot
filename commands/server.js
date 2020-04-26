module.exports = {
	name: 'server',
	description: 'Server!',
	execute(message, args) {
		message.channel.send(`**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);
	},
};