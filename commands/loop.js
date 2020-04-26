module.exports = {
	name: 'loop',
	description: 'Repeats all songs in the queue',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
    
		if (!serverQueue.loop) {
      			serverQueue.loop = true;
      			return message.channel.send('🔁 The queue repeat has been enabled.');
    		} else {
      			serverQueue.loop = false;
      			return message.channel.send('🔁 The queue repeat has been disabled.');
    		}
	}
};