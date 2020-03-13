// function solution(table) {
//     let max = Math.min(table.length, table[0].length);
    
//     while (max > 0) {
//         const range = { x: table[0].length - max, y: table.length - max }

//         for (let y = 0; y <= range.y; y++) {
//             const rows = table.slice(y, y + max);
            
//             for (let x = 0; x <= range.x; x++) {
//                 if (rows.every(row => !row.slice(x, x + max).includes(0))) return max * max;
//             }
//         }
        
//         max--;
//     }
    
//     return 0;
// } 효율성 0

function solution(table) {
    if (Math.min(table.length, table[0].length) < 2) return table.find(row => row.includes(1)) ? 1 : 0;
    
    let max = 0;
    
    for (let y = 1; y < table.length; y++) {
        const row = table[y];

        for (let x = 1; x < row.length; x++) {
            if (row[x]) {
                row[x] = Math.min(row[x - 1], table[y - 1][x], table[y - 1][x - 1]) + 1;

                if (row[x] > max) max = row[x];
            }
        }
    }
    
    return max * max;
}