module.exports = {
	name: 'pause',
	description: 'pause the music!',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('You have to be in a voice channel to pause the music!');
        serverQueue.songs = [];
        message.channel.send('pausing :)');
		serverQueue.connection.dispatcher.pause();
	},
};