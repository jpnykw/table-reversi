const attach_event = (dom) => {
    dom.addEventListener('click', function() {
        // console.log('cell clicked', this);
        if ([...this.classList].includes('assist')) {
            const position = this.getAttribute('position');
            const x = Number(position[0]);
            const y = Number(position[2]);

            this.classList.remove('assist');
            board.put(stone, x, y);
            render(stone);

            stone = stone == 2 ? 1 : 2;
            if (board.get_assist(stone, WIDTH, HEIGHT).length === 0) {
                display_counts('SKIP!');
                stone = stone == 2 ? 1 : 2;
                if (board.get_assist(stone, WIDTH, HEIGHT).length === 0) {
                    display_counts('END!');
                }
            }
        }
    });
}

const render = () => {
    [...document.querySelectorAll('th')].forEach(th => {
        const position = th.getAttribute('position');
        const x = Number(position[0]);
        const y = Number(position[2]);
        const stone = board[y][x];

        th.innerText = stone == 2 ? '⚫' : stone == 1 ? '⚪' : '';
    });

    display_counts();
}

const display_counts = (message = '') => {
    const count = board.count();
    document.querySelector('#stat').innerText = `⚫: ${count.black}, ⚪: ${count.white}`;
    document.querySelector('#message').innerText = message;
}