const DX = [+0, +1, +1, +1, +0, -1, -1, -1];
const DY = [-1, -1, +0, +1, +1, +1, +0, -1];

Array.prototype.test = function (stone, target, x, y) {
	if (this[y][x] != 0) return [];
	const result = [];

	for (let id = 0; id < 8; id++) {
		let temp_x = x;
		let temp_y = y;
		let flag = true;

		while (true) {
			temp_x += DX[id];
			temp_y += DY[id];

			if (temp_x < 0 || temp_x > 7 || temp_y < 0 || temp_y > 7) break;

			const now = this[temp_y][temp_x];

			if (flag) {
				if (this[temp_y][temp_x] != target) break;
				flag = false;
			}

			if (now == 0) break;

			if (now == stone) {
				result.push({
					dx: DX[id]
					, dy: DY[id]
				});
				break;
			}
		}
	}

	return result;
}

Array.prototype.search = function (stone, width, height) {
	const target = stone == 1 ? 2 : 1;
	const result = [];

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			if (this.test(stone, target, x, y).length) {
				result.push({
					x, y
				});
			}
		}
	}

	return result;
}

Array.prototype.get_assist = function (stone, width, height) {
	const result = this.search(stone, width, height);

	result.forEach(pos => {
		const cell = [...document.querySelectorAll('th')].filter(th => {
			return th.getAttribute('position') === `${pos.x}.${pos.y}`;
		})[0];

		cell.innerText = '●';
		cell.classList.add('assist');
	});

	return result;
}
