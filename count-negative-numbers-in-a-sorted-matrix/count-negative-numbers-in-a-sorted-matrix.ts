//https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

export function countNegatives(grid: number[][]): number {
    let negatives = 0;
    let lastRow = grid.length -1;
    for (let posRow = lastRow; posRow >=0; posRow-- ) {
        let lastPos = grid[posRow].length - 1;
        if (grid[posRow][lastPos] >=0)
            break;
        for (let pos = lastPos; pos >= 0; pos--) {
            if (grid[posRow][pos] >= 0)
                break;
            negatives++
        }

    }
    return negatives;
};

