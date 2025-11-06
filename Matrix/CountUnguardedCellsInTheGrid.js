/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    // Create grid m*n and fill with 0's
    const matrix = Array.from({ length: m }, () => Array(n).fill(0));

    // Fill guards (2) and walls (3)
    guards.forEach(([row, column]) => matrix[row][column] = 2);
    walls.forEach(([row, column]) => matrix[row][column] = 3); 

    // Place directions as cell operations to loop easily
    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    guards.forEach(([row, column]) => {
        for (const [drow, dcolumn] of directions) {
            let r = row + drow;
            let c = column + dcolumn;

            // While inside matrix and cell is not guard neither wall
            while (r >= 0 && r < m && c >= 0 && c < n && matrix[r][c] < 2) {
                matrix[r][c] = 1; // Then it's guarded!
                r += drow;
                c += dcolumn;
            }
        }
    });

    return matrix.flat().filter(cell => cell === 0).length; 
};

var test = countUnguarded(4, 6, [[0,0],[1,1],[2,3]], [[0,1],[2,2],[1,4]]);
console.log(test);