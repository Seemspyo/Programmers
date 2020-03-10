function solution(table) {
    let max = 0;
    
    for (let i = 0; i < table.length; i++) {
        const row = table[i];
        let width = 0;

        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            
            if (cell && ++width > max) {
                const height = i + width;
                let is = true;

                for (let k = i + 1; k < height; k++) {
                    if (i === height - 1) for (let n = j - (width + 1); n <= j; n++) if (!table[k][n]) { is = false; break; }
                    else if (!table[k][j]) is = false;

                    if (!is) break;
                }
                
                if (is) max = width;
            } else width = 0;
        }
        
        if (table.length - max <= i) break;
    }

    return max * max;
}