const responses = [
    'Unclear, ask again later',
    'Soon',
    'Yes',
    'Absolutely!',
    'Never',
    'Magic 8-ball is currently unavailable, please leave a message after the tone. \\*beep\\*',
    'When you are ready',
    'Hopefully',
    'Hopefully not',
    'Oh my, why would you even ask that?',
    'What kind of a question is that?',
    'Over my dead body!',
    'Haha, funny joke'
];

const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

module.exports = {
	name: '8ball',
	description: 'asks magic 8-ball a question',
	execute(message, args) {
		if (args.length < 1) {
            message.channel.send('Please specify something to ask of the magic 8-ball!');
        }
    
        let response = randomItem(responses);
    
        if (message.content.toLowerCase().indexOf('ipodtouch0218') > -1 || message.content.indexOf('233360087979130882') > -1) {
            response = 'HAH';
        }
    
        message.channel.send(`:8ball: | ${response}`);
	},
};
