class VectorStack {
    
    constructor() {
        this.stack = new Array();
    }
    
    add(stack) {
        if (!this.stack.find(v => v.x === stack.x && v.y === stack.y)) this.stack.push(stack);
    }
    
    clear() {
        this.stack.length = 0;
    }
    
    get length() {
        return this.stack.length;
    }
    
}

function solution(h, w, board) {
    board = board.map(row => row.split(''));
    
    let count = 0;
    const stack = new VectorStack();
    
    while (true) {
        for (let y = 1; y < h; y++) {
            const row = board[y];

            for (let x = 1; x < w; x++) {
                if (typeof row[x] !== 'string') continue;
                const prevX = x - 1, nextX = x + 1, prevY = y - 1, nextY = y + 1;

                if (row[x] === row[prevX] && board[prevY].slice(prevX, nextX).every(n => n === row[x])) {

                    for (let ay = prevY; ay < nextY; ay++)
                        for (let ax = prevX; ax < nextX; ax++) stack.add({ x: ax, y: ay });

                }
            }
        }

        if (stack.length) {
            count += stack.length;

            for (const { x, y } of stack.stack) board[y][x] = 0;
            stack.clear();
            
            for (let y = h - 2; y >= 0; y--) {
                for (let x = 0; x < w; x++) {
                    if (typeof board[y][x] !== 'string') continue;
                    for (let ay = y + 1; ay < h; ay++) {
                        if (typeof board[ay][x] !== 'string') {
                            board[ay][x] = board[ay - 1][x];
                            board[ay - 1][x] = 0;
                        }
                    }
                }
            }
        } else break;
    }
    
    return count;
}