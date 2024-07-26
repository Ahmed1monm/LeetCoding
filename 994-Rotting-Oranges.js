/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
 let fresh = 0;
    const queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) fresh++;
            if (grid[i][j] === 2) queue.push([i, j]);
        }
    }
    let minutes = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (queue.length && fresh) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX < 0 || newX >= grid.length || newY < 0 || newY >= grid[0].length || grid[newX][newY] !== 1) continue;
                grid[newX][newY] = 2;
                fresh--;
                queue.push([newX, newY]);
            }
        }
        minutes++;
    }
    return fresh === 0 ? minutes : -1;
};