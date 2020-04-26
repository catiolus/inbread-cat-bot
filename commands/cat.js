const got = require('got');

module.exports = {
	name: 'cat',
	description: 'sends cat picture',
	async execute(message, args) {
        const m = message.channel.send(':arrows_counterclockwise:');
        const res = await got ('http://aws.random.cat/meow', { json: true });

        if (!res.body || !res.body.file) {
            message.channel.send('Failed to load cat picture!');
        }

        message.channel.send({file: res.body.file});
        m.delete();
	},
};