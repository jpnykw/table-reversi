const WIDTH = 8;
const HEIGHT = 8;

let board = null;
let stone = 2; // Black

const main = () => {
	board = new Array(HEIGHT).fill(0).map(_ => new Array(WIDTH).fill(0));
	board[3][3] = 1;
	board[4][4] = 1;
	board[3][4] = 2;
	board[4][3] = 2;

	board.generate(WIDTH, HEIGHT);
	board.get_assist(stone, WIDTH, HEIGHT);
	display_counts();
}

// entry point
main();
