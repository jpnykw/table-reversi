Array.prototype.generate = function (width, height) {
	const table = document.createElement('table');

	for (let y = 0; y < height; y++) {
		const tr = document.createElement('tr');
		for (let x = 0; x < width; x++) {
			const th = document.createElement('th');
			const stone = this[y][x];
			th.innerText = stone == 2 ? '⚫' : stone == 1 ? '⚪' : '';
			th.setAttribute('position', `${x}.${y}`);
			tr.appendChild(th);
			attach_event(th, this);
		}
		table.appendChild(tr);
	}
	document.body.appendChild(table);
}
