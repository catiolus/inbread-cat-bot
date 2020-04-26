function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10]);

module.exports = {
	name: 'mafia',
	description: 'assigns mafia roles',
	execute(message, args) {
		message.channel.send(ranNums[4]);
	},
};