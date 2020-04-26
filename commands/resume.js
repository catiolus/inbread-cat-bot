module.exports = {
	name: 'resume',
	description: 'resume the music!',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('You have to be in a voice channel to resume the music!');
        serverQueue.songs = [];
        message.channel.send('resuming :)');
		serverQueue.connection.dispatcher.resume();
	},
};