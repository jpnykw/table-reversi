Array.prototype.count = function () {
	let white = 0;
	let black = 0;

	this.forEach(line => {
		line.forEach(stone => {
			if (stone == 1) white++;
			if (stone == 2) black++;
		});
	});

	return {
		white, black
	}
}
