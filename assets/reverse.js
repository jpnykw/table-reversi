Array.prototype.put = function(stone, x, y) {
    const target = stone == 1 ? 2 : 1;
    const direction = this.test(stone, target, x, y);
    direction.forEach(position => {
        let temp_x = x;
        let temp_y = y;

        while (true) {
            temp_x += position.dx;
            temp_y += position.dy;
            if (this[temp_y][temp_x] != target) break;
            this[temp_y][temp_x] = stone;
        }
    });

    this[y][x] = stone;
}