// 2352. Equal Row and Column Pairs
// https://leetcode.com/problems/equal-row-and-column-pairs/
// Pattern: hashing - couvert each row to a string key (arrays can't be
// used as Map keys directly), count row frequencies, then for each
// column build the same kind of key and add its matching row count

function equalPairs(grid) {
    const n = grid.length;
    const rowMap = new Map();

    for (const row of grid) {
        const key = row.join(',');
        rowMap.set(key, (rowMap.get(key) || 0) + 1);
    }

    let count = 0;

    for (let col = 0; col < n; col++) {
        const columnValues = [];
        for (let row = 0; row < n; row++) {
            columnValues.push(grid[row][col]);
        }
        const key = columnValues.join(',');
        count += rowMap.get(key) || 0;
    }

    return count;
};

// Example:
// equalPairs([[3,2,1],[1,7,6],[2,7,7]]) -> 1
console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));