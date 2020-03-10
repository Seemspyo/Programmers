function solution(result) {
    const table = new Array(), power = new Map([ [ 'S', 1 ], [ 'D', 2 ], [ 'T', 3 ] ]), digitExp = new RegExp(/\d/);
    let current = -1, tmp = '';

    for (const char of result) {
        if (digitExp.test(char)) tmp += char;
        else {
            if (tmp) {
                current = table.push(Number.parseInt(tmp)) - 1;
                tmp = '';
            }
            
            if (power.has(char)) table[current] = Math.pow(table[current], power.get(char));
            else switch (char) {
                case '*':
                    table[current] *= 2;
                    if (current > 0) table[current - 1] *= 2;
                    break;
                case '#':
                    table[current] *= -1;
                    break;
            }
        }
    }
    
    return table.reduce((acc, n) => acc + n, 0);
}