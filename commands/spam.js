module.exports = {
	name: 'spam',
    description: 'spams someone of choosing',
    cooldown : 300,
	execute(message) {
        for (var i = 0; i <200; i++){
            message.channel.send(`suck on these toes ${message.mentions.users.first()}`);
        }  
	}, 
};